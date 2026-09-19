import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/q/qf_wqd7nc.css';
import '../../css/k/ktu665dou.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="qf_wqd7nc"/><path class="ktu665dou"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:eye-outline"} {...others} />);
}

export default Component;
