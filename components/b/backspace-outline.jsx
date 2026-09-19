import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qtkxfz27r.css';
import '../../css/x/xz_jktb3j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qtkxfz27r"/><path clip-rule="evenodd" class="xz_jktb3j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:backspace-outline"} {...others} />);
}

export default Component;
