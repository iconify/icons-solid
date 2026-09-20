import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f0r-2x1bp.css';
import '../../css/m/m7mjk89gp.css';

const viewBox = {"width":256,"height":256};
const content = `<circle class="f0r-2x1bp"/><path class="m7mjk89gp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:esbuild"} {...others} />);
}

export default Component;
