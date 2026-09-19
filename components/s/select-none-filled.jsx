import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/houfp_bzv.css';
import '../../css/h/h8_ziyb1i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="houfp_bzv"/><path class="h8_ziyb1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:select-none-filled"} {...others} />);
}

export default Component;
