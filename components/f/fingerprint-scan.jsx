import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a22h55oqv.css';
import '../../css/w/ww2rfph8i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a22h55oqv"/><path class="ww2rfph8i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:fingerprint-scan"} {...others} />);
}

export default Component;
