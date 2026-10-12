import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vhrfq9yjx.css';
import '../../css/t/tts1o48wv.css';
import '../../css/e/e2w64zcxy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vhrfq9yjx"/><path class="tts1o48wv"/><path class="e2w64zcxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:beef-off-filled"} {...others} />);
}

export default Component;
