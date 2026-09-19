import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mi9t0_byz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mi9t0_byz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:receipt-filled"} {...others} />);
}

export default Component;
