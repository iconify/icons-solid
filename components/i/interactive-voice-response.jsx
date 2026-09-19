import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mvp85bpbd.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mvp85bpbd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:interactive-voice-response"} {...others} />);
}

export default Component;
