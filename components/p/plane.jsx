import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/s/stnrnkbtz.css';
import '../../css/q/qgcm3qb8i.css';
import '../../css/z/zhkkcsbgq.css';
import '../../css/c/cdgo83mfa.css';
import '../../css/c/ctvihhbhg.css';
import '../../css/l/lf-uk3ben.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="stnrnkbtz"/><path class="qgcm3qb8i"/><path class="wm-shine zhkkcsbgq"/><path class="cdgo83mfa"/><path class="ctvihhbhg"/><path class="lf-uk3ben"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:plane"} {...others} />);
}

export default Component;
