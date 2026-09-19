import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/u/u665ucc1o.css';
import '../../css/h/h450ksbac.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="u665ucc1o"/><path class="h450ksbac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:microphone"} {...others} />);
}

export default Component;
