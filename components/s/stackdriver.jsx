import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fhvsifbll.css';
import '../../css/k/kwokvsbhf.css';
import '../../css/o/oli25tbif.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fhvsifbll"/><path class="kwokvsbhf"/><path class="oli25tbif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:stackdriver"} {...others} />);
}

export default Component;
