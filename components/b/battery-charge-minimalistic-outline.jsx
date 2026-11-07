import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mp600_i4z.css';
import '../../css/o/osemxebgc.css';
import '../../css/j/jy0yf6bpc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mp600_i4z"/><path clip-rule="evenodd" class="osemxebgc"/><path class="jy0yf6bpc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:battery-charge-minimalistic-outline"} {...others} />);
}

export default Component;
