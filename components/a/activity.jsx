import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p07tmccvv.css';
import '../../css/z/zhfvakbsb.css';
import '../../css/i/i1hpp1bvk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="p07tmccvv"><path class="zhfvakbsb"/><path class="i1hpp1bvk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:activity"} {...others} />);
}

export default Component;
