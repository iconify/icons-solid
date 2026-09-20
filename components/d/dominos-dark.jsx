import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydzbdhtcp.css';
import '../../css/e/e5c90cc_n.css';
import '../../css/m/md21q1b6t.css';

const viewBox = {"width":333.22,"height":333.22};
const content = `<path class="ydzbdhtcp"/><path class="e5c90cc_n"/><path class="md21q1b6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:dominos-dark"} {...others} />);
}

export default Component;
