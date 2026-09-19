import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t89--hbtm.css';
import '../../css/s/sbh-k_brg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t89--hbtm"/><path class="sbh-k_brg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:people-diversity-filled"} {...others} />);
}

export default Component;
