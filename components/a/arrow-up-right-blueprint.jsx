import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/sn-3ut9iw.css';
import '../../css/m/m46r2fraf.css';
import '../../css/r/ruqcf6b8z.css';
import '../../css/g/glei08b-e.css';
import '../../css/o/o26o7ko9d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="sn-3ut9iw wm-deco"/><path class="m46r2fraf wm-k"/><path class="ruqcf6b8z wm-a"/><path class="glei08b-e wm-k"/><path class="o26o7ko9d wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-up-right-blueprint"} {...others} />);
}

export default Component;
