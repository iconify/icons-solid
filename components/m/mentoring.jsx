import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kfcfzzxue.css';
import '../../css/d/dzlldxbzo.css';
import '../../css/z/zoixtkcpw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="kfcfzzxue"/><path class="dzlldxbzo"/><path class="zoixtkcpw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mentoring"} {...others} />);
}

export default Component;
