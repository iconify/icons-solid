import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h2hc99b6o.css';
import '../../css/q/q38f4vbqi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h2hc99b6o"/><path class="q38f4vbqi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:gemini2"} {...others} />);
}

export default Component;
