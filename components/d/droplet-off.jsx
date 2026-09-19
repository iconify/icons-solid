import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/d/dvak_t-6t.css';
import '../../css/j/jlp5vcjwf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="dvak_t-6t"/><path class="jlp5vcjwf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:droplet-off"} {...others} />);
}

export default Component;
