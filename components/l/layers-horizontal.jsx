import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nln0rx3xh.css';
import '../../css/i/i4ukgldfb.css';
import '../../css/m/mic-pmbmy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="nln0rx3xh"/><path class="i4ukgldfb"/><path class="mic-pmbmy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:layers-horizontal"} {...others} />);
}

export default Component;
