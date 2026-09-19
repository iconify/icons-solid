import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bazxsibde.css';
import '../../css/l/lidjc4bcc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bazxsibde"/><path class="lidjc4bcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:history-filled"} {...others} />);
}

export default Component;
