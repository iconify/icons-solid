import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/n/na_ij8bwy.css';
import '../../css/y/yrazfwbuq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="na_ij8bwy"/><path class="yrazfwbuq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:exclamation-mark"} {...others} />);
}

export default Component;
