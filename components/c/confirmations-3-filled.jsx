import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhd2w0b6x.css';
import '../../css/a/a8e-e4bkc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qhd2w0b6x"/><path clip-rule="evenodd" class="a8e-e4bkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:confirmations-3-filled"} {...others} />);
}

export default Component;
