import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvcjt11dq.css';
import '../../css/s/stqyn-aem.css';
import '../../css/b/ba8nfsfvj.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGitQdVoSr" x1="-75.6" x2="450" y1="387.8" y2="173" gradientUnits="userSpaceOnUse"><stop offset="0" class="qvcjt11dq"/><stop offset="1" class="stqyn-aem"/></linearGradient><path fill="url(#SVGitQdVoSr)" class="ba8nfsfvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:logto"} {...others} />);
}

export default Component;
