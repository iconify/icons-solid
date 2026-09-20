import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gulqfdbmc.css';
import '../../css/p/pcju9-b5h.css';
import '../../css/g/gk9ls50fi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gulqfdbmc"/><path class="pcju9-b5h"/><path class="gk9ls50fi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:gift"} {...others} />);
}

export default Component;
