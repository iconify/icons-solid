import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qf-767cdz.css';
import '../../css/l/lidjc4bcc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qf-767cdz"/><path class="lidjc4bcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:future-filled"} {...others} />);
}

export default Component;
