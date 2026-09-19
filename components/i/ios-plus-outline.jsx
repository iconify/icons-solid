import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxamrnbvx.css';
import '../../css/t/tiebub9tw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bxamrnbvx"/><path class="tiebub9tw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-plus-outline"} {...others} />);
}

export default Component;
