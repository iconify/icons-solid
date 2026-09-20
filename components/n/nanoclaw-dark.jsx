import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/elfgzfcxk.css';
import '../../css/o/o2cqz1o0l.css';
import '../../css/o/oxwb1e3yh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="elfgzfcxk"/><path class="o2cqz1o0l"/><path class="oxwb1e3yh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nanoclaw-dark"} {...others} />);
}

export default Component;
