import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bfy466lvt.css';
import '../../css/j/j674ppb4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bfy466lvt"/><path class="j674ppb4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:page-plus"} {...others} />);
}

export default Component;
