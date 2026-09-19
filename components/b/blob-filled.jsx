import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrq_v6q4b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xrq_v6q4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:blob-filled"} {...others} />);
}

export default Component;
