import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/y/yoeqtvbde.css';
import '../../css/k/ka0ic_bvv.css';
import '../../css/f/fb3lm9nbe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="yoeqtvbde"/><path class="ka0ic_bvv"/><path class="fb3lm9nbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-reply-all-01"} {...others} />);
}

export default Component;
