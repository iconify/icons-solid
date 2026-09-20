import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/idyndeb8p.css';
import '../../css/d/d_mb2abxn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="idyndeb8p"/><path class="d_mb2abxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:login6"} {...others} />);
}

export default Component;
