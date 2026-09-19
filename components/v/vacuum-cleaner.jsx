import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f6vf_yxmf.css';
import '../../css/j/ja7_2f_3u.css';
import '../../css/e/ejt5gkbzg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f6vf_yxmf"/><path class="ja7_2f_3u"/><path class="ejt5gkbzg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:vacuum-cleaner"} {...others} />);
}

export default Component;
