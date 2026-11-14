import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/d52fowc3l.css';
import '../../css/c/cx5wglyau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="d52fowc3l"/><path class="cx5wglyau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:self-transfer"} {...others} />);
}

export default Component;
