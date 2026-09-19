import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prcy1udmo.css';
import '../../css/j/jnlj8ybtf.css';
import '../../css/j/jn0obg5tf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="prcy1udmo"/><ellipse class="jnlj8ybtf"/><path class="jn0obg5tf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:flashlight-sharp"} {...others} />);
}

export default Component;
