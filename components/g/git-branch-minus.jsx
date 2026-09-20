import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pl2kf0_ch.css';
import '../../css/w/w65t7vpsn.css';
import '../../css/d/dos_yhbgg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pl2kf0_ch"/><circle class="w65t7vpsn"/><circle class="dos_yhbgg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:git-branch-minus"} {...others} />);
}

export default Component;
