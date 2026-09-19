import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/q/qs5th2sbp.css';
import '../../css/j/j3zc7kn1m.css';
import '../../css/x/x3yzpi80d.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><path class="qs5th2sbp"/><path class="j3zc7kn1m"/><path class="x3yzpi80d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:eye-slash"} {...others} />);
}

export default Component;
