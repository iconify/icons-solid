import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qs4eg3b5w.css';
import '../../css/k/krihi8bah.css';
import '../../css/i/i6ci4aclc.css';
import '../../css/b/bc6c6rbzb.css';
import '../../css/r/rqvlhza_d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qs4eg3b5w"/><path class="krihi8bah"/><path class="i6ci4aclc"/><path class="bc6c6rbzb"/><path class="rqvlhza_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:mistral-ai-dark"} {...others} />);
}

export default Component;
