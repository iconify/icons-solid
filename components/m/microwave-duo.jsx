import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to7rc9brl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/eitnl73xd.css';
import '../../css/m/mm2ep_xmq.css';
import '../../css/n/nzftghbcc.css';
import '../../css/f/f443avb-h.css';
import '../../css/o/oh3645bzr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary to7rc9brl"/><g class="dt0cm9dhy primary"><path class="eitnl73xd"/><path class="mm2ep_xmq"/><path class="nzftghbcc"/><path class="f443avb-h"/><path class="oh3645bzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:microwave-duo"} {...others} />);
}

export default Component;
