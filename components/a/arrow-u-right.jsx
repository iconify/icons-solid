import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/c4ahtzbau.css';
import '../../css/j/j8yn8zhqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="c4ahtzbau"/><path class="j8yn8zhqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:arrow-u-right"} {...others} />);
}

export default Component;
