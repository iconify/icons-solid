import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxj0albai.css';
import '../../css/c/cx5wjlbpv.css';
import '../../css/c/cylan_37t.css';
import '../../css/j/juzjijckv.css';
import '../../css/z/zd-u8obhn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zxj0albai"/><path class="cx5wjlbpv"/><path class="cylan_37t"/><circle class="juzjijckv"/><path class="zd-u8obhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:tapecartridge"} {...others} />);
}

export default Component;
