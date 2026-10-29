import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n3aa3iv0a.css';
import '../../css/d/d7ut18bbg.css';
import '../../css/u/uf0ekee7e.css';
import '../../css/k/k1kj1iruv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="n3aa3iv0a"/><path class="d7ut18bbg wm-k"/><path class="uf0ekee7e wm-k"/><path class="k1kj1iruv wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:send-sketch"} {...others} />);
}

export default Component;
