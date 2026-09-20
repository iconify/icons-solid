import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hxgotib5b.css';

const viewBox = {"width":138.039,"height":40.145,"left":-1.136,"top":-1.136};
const content = `<path class="hxgotib5b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:dupont"} {...others} />);
}

export default Component;
