import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/cvk1ilb9q.css';
import '../../css/g/gkeixvvic.css';
import '../../css/c/cpnpjfb3t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="cvk1ilb9q wm-k"/><path class="gkeixvvic wm-k"/><path class="cpnpjfb3t wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:holly-sketch"} {...others} />);
}

export default Component;
