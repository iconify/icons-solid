import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsgr4acwq.css';
import '../../css/q/qvr969ois.css';
import '../../css/w/wuqa13gqk.css';
import '../../css/j/j171pzbgu.css';
import '../../css/h/ha5b2dbqy.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="qsgr4acwq"/><path class="qvr969ois"/><path class="wuqa13gqk"/><path class="j171pzbgu"/><path class="ha5b2dbqy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:jupyter-wordmark"} {...others} />);
}

export default Component;
