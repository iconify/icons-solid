import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nuc7jk3pr.css';

const viewBox = {"width":429.02,"height":429.02,"left":116,"top":34.49};
const content = `<path class="nuc7jk3pr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:mastra-light"} {...others} />);
}

export default Component;
