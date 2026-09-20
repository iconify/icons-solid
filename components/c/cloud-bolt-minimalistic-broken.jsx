import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kllacmrbx.css';
import '../../css/t/tv_6jisct.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="kllacmrbx"/><path class="tv_6jisct"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-bolt-minimalistic-broken"} {...others} />);
}

export default Component;
