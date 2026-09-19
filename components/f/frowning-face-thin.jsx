import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/x/xr1zzs9rr.css';
import '../../css/h/hlb29195s.css';
import '../../css/o/oyy_oabpj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><circle class="xr1zzs9rr"/><path class="hlb29195s"/><path class="oyy_oabpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:frowning-face-thin"} {...others} />);
}

export default Component;
