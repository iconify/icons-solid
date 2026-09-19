import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gjdjfffgs.css';
import '../../css/t/tb1aqpa-v.css';
import '../../css/b/brt3ujb3v.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="n1lsf0bnc"><path class="gjdjfffgs"/><path class="tb1aqpa-v"/><path class="brt3ujb3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:heart-plus"} {...others} />);
}

export default Component;
