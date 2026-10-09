import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u364xbb6d.css';
import '../../css/i/ilw_03s_n.css';
import '../../css/e/e23at5bmd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u364xbb6d"/><path class="ilw_03s_n"/><path class="e23at5bmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:grid-flexibility-20-bold"} {...others} />);
}

export default Component;
