import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/sk5ftyg6q.css';
import '../../css/c/cljvb1eti.css';
import '../../css/t/tjzpwgkkr.css';
import '../../css/j/jfdiy92kt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="sk5ftyg6q"/><path class="cljvb1eti"/><path class="tjzpwgkkr"/><path class="jfdiy92kt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-auto-correction"} {...others} />);
}

export default Component;
