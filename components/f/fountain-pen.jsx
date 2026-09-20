import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e3zguynjx.css';
import '../../css/q/q1emg3b3n.css';
import '../../css/c/cjd27qbbp.css';
import '../../css/y/yjmi5lb6w.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e3zguynjx"/><path class="q1emg3b3n"/><path class="cjd27qbbp"/><path class="yjmi5lb6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:fountain-pen"} {...others} />);
}

export default Component;
