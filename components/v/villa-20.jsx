import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/osc_bo0fp.css';
import '../../css/g/gxfstbt8c.css';
import '../../css/a/at5734fty.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="osc_bo0fp"/><path class="gxfstbt8c"/><path class="at5734fty"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:villa-20"} {...others} />);
}

export default Component;
