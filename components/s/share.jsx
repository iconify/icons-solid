import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hxlt3zlpr.css';
import '../../css/l/l071l1pom.css';
import '../../css/x/xcu_9lp8n.css';
import '../../css/k/kc-rqe92h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hxlt3zlpr"/><path class="l071l1pom"/><path class="xcu_9lp8n"/><path class="kc-rqe92h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:share"} {...others} />);
}

export default Component;
