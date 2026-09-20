import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3b0l3olj.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="x3b0l3olj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:zoo"} {...others} />);
}

export default Component;
