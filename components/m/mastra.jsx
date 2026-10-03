import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsjky8-vc.css';

const viewBox = {"width":429.02,"height":429.02,"left":116,"top":34.49};
const content = `<path class="dsjky8-vc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:mastra"} {...others} />);
}

export default Component;
