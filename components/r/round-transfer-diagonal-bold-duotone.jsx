import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ntj_g2bxu.css';
import '../../css/f/fg5sr67vv.css';
import '../../css/e/exa1j-bcy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ntj_g2bxu"/><path class="fg5sr67vv"/><path class="exa1j-bcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:round-transfer-diagonal-bold-duotone"} {...others} />);
}

export default Component;
