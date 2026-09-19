import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fq0zzwbhy.css';
import '../../css/o/omdctlxyb.css';
import '../../css/u/uwk-mk2ws.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fq0zzwbhy"/><path class="omdctlxyb"/><path class="uwk-mk2ws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:electronics"} {...others} />);
}

export default Component;
