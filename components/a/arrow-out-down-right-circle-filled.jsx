import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-gja2bhg.css';
import '../../css/k/kpu7t4bcc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a-gja2bhg"/><path class="kpu7t4bcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-out-down-right-circle-filled"} {...others} />);
}

export default Component;
