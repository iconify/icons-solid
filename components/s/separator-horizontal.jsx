import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z9h-83bpq.css';
import '../../css/a/adf1zybll.css';
import '../../css/n/nfk5u5bfg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="z9h-83bpq"/><path class="adf1zybll"/><path class="nfk5u5bfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:separator-horizontal"} {...others} />);
}

export default Component;
