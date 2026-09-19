import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtl61lbwj.css';
import '../../css/w/wckjfubqk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vtl61lbwj"/><path clip-rule="evenodd" class="wckjfubqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:facebook-messenger-outline"} {...others} />);
}

export default Component;
