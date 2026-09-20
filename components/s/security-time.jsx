import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/q3-6cmb1n.css';
import '../../css/r/r_7aq8m-i.css';
import '../../css/r/r0wv4tb5t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="q3-6cmb1n"/><path class="r_7aq8m-i"/><path class="r0wv4tb5t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:security-time"} {...others} />);
}

export default Component;
