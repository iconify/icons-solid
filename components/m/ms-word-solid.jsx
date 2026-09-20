import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zknrt17wv.css';
import '../../css/o/oufzmac7u.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="zknrt17wv"/><path clip-rule="evenodd" class="oufzmac7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:ms-word-solid"} {...others} />);
}

export default Component;
