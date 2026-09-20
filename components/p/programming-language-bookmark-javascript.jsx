import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zrtbmbbhv.css';
import '../../css/d/d9ibocxay.css';
import '../../css/y/ytiie3blb.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="zrtbmbbhv"/><path class="d9ibocxay"/><path class="ytiie3blb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:programming-language-bookmark-javascript"} {...others} />);
}

export default Component;
