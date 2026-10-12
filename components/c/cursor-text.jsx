import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/r/rd6aur8hh.css';
import '../../css/g/g-55tibjl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="rd6aur8hh"/><path class="g-55tibjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cursor-text"} {...others} />);
}

export default Component;
