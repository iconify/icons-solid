import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/n/niyrnkbpv.css';
import '../../css/e/e38sh3bgm.css';
import '../../css/x/xzyzuublu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="niyrnkbpv"/><path class="e38sh3bgm"/><path class="xzyzuublu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:protonmail-logo-1"} {...others} />);
}

export default Component;
