import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zp_uagnzf.css';
import '../../css/z/zwr_uxclv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zp_uagnzf"/><path class="zwr_uxclv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:piggy-bank"} {...others} />);
}

export default Component;
