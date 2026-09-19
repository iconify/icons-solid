import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/oppy2vb2o.css';
import '../../css/k/kvl2zqb5m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="oppy2vb2o"/><path class="kvl2zqb5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:voice-comment"} {...others} />);
}

export default Component;
