import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/x/xw0eb-lzn.css';
import '../../css/v/v1tzuzb2j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="xw0eb-lzn"/><path class="v1tzuzb2j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:summary"} {...others} />);
}

export default Component;
