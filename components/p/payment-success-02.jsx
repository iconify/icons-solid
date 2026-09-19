import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zp0j2whzz.css';
import '../../css/i/icr3gcbor.css';
import '../../css/m/mkdq8fbby.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zp0j2whzz"/><path class="icr3gcbor"/><path class="mkdq8fbby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:payment-success-02"} {...others} />);
}

export default Component;
