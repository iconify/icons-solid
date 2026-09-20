import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/c/cuk0vf3zf.css';
import '../../css/x/xpy1h2bwq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="cuk0vf3zf"/><path class="xpy1h2bwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:note"} {...others} />);
}

export default Component;
