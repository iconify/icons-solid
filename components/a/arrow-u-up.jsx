import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/whz8z23bj.css';
import '../../css/j/jszql2b_k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="whz8z23bj"/><path class="jszql2b_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:arrow-u-up"} {...others} />);
}

export default Component;
