import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/awq37tbzx.css';
import '../../css/q/qfscns7yy.css';
import '../../css/n/ndpfd3bmb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="awq37tbzx"/><path class="qfscns7yy"/><path class="ndpfd3bmb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:euro-duo"} {...others} />);
}

export default Component;
