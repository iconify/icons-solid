import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ekycqtc3s.css';
import '../../css/d/d93m-hbpm.css';
import '../../css/n/nqk3t3jaw.css';
import '../../css/e/e9e_psbbr.css';
import '../../css/p/pw8f5c0fp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ekycqtc3s"/><path class="d93m-hbpm"/><path class="nqk3t3jaw"/><path class="e9e_psbbr"/><path class="pw8f5c0fp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimize-square-2-linear"} {...others} />);
}

export default Component;
