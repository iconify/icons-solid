import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wyv22vb3x.css';
import '../../css/i/i7sr6ubzr.css';
import '../../css/s/s64_1ebkq.css';
import '../../css/g/gg7u_jkqs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wyv22vb3x"/><path class="i7sr6ubzr"/><path class="s64_1ebkq"/><path class="gg7u_jkqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:speech-to-text"} {...others} />);
}

export default Component;
