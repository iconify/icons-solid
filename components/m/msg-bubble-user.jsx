import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h1xyzvb4l.css';
import '../../css/b/blphqos8l.css';
import '../../css/f/f1tqfuc1r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h1xyzvb4l"/><circle class="blphqos8l"/><path class="f1tqfuc1r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:msg-bubble-user"} {...others} />);
}

export default Component;
