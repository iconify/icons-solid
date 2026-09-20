import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/v/v542ywb3f.css';
import '../../css/j/jvkhsobmq.css';
import '../../css/x/xdecqpbqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="v542ywb3f"/><path class="jvkhsobmq"/><path class="xdecqpbqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:layers2"} {...others} />);
}

export default Component;
