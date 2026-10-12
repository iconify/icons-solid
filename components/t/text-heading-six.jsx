import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/w/wv_my9euo.css';
import '../../css/c/cyri5-5ke.css';
import '../../css/m/mxxvqr8ab.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="wv_my9euo"/><circle transform="rotate(90 19.24 19.34)" class="cyri5-5ke"/><path class="mxxvqr8ab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:text-heading-six"} {...others} />);
}

export default Component;
