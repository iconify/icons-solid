import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lm_s39bqo.css';
import '../../css/b/bf32wh85n.css';
import '../../css/l/li_wjjrfl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="lm_s39bqo"/><path class="bf32wh85n"/><path class="li_wjjrfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-logging"} {...others} />);
}

export default Component;
