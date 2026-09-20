import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/y/yge3d9bpf.css';
import '../../css/y/y5pevlgfj.css';
import '../../css/b/bkgm8ccsn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="yge3d9bpf"/><path class="y5pevlgfj"/><path class="bkgm8ccsn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:user-head-focus"} {...others} />);
}

export default Component;
