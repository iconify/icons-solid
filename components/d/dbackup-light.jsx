import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mekzb_ebz.css';
import '../../css/e/e8_gbpbab.css';
import '../../css/p/pvdz305lf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mekzb_ebz"/><path class="e8_gbpbab"/><path class="pvdz305lf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dbackup-light"} {...others} />);
}

export default Component;
