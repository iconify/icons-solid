import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/a5-jzac4o.css';
import '../../css/h/hppj8jbqh.css';
import '../../css/y/yknmznb5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="a5-jzac4o"/><path class="hppj8jbqh"/><path class="yknmznb5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:files"} {...others} />);
}

export default Component;
