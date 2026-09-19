import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xc93vrbkc.css';
import '../../css/z/zho_0_ruy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xc93vrbkc"/><path class="zho_0_ruy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:rewind-filled"} {...others} />);
}

export default Component;
