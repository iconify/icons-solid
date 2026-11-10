import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/e/e9gljhbwf.css';
import '../../css/w/w1e--ob_u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="e9gljhbwf"/><path class="w1e--ob_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-replace"} {...others} />);
}

export default Component;
