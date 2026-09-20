import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngudvtbhg.css';
import '../../css/i/iqqla4wjy.css';
import '../../css/c/c2e35emrs.css';
import '../../css/k/ken8xlbvk.css';
import '../../css/v/v24tgxb9s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ngudvtbhg"/><path class="iqqla4wjy"/><path class="c2e35emrs"/><path class="ken8xlbvk"/><path class="v24tgxb9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mistral-ai-light"} {...others} />);
}

export default Component;
