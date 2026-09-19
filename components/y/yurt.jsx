import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/j/jiaucbm6l.css';
import '../../css/d/dqcj_6b8q.css';
import '../../css/g/g49ywcb0a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="jiaucbm6l"/><path class="dqcj_6b8q"/><path class="g49ywcb0a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:yurt"} {...others} />);
}

export default Component;
