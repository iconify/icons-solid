import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_uhtibqv.css';
import '../../css/o/olwq-zbrb.css';
import '../../css/i/ip_4o1ksj.css';
import '../../css/c/cnulnizlp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m_uhtibqv wm-k"/><path class="olwq-zbrb wm-a"/><path class="ip_4o1ksj wm-k"/><path class="cnulnizlp wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:paste"} {...others} />);
}

export default Component;
