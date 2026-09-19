import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sy1vs24lh.css';
import '../../css/k/k3-ivsvyj.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="sy1vs24lh"/><path class="k3-ivsvyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:gatsby-wordmark"} {...others} />);
}

export default Component;
