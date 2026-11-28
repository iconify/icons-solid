import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lkgs06hvj.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/da92j5b5b.css';
import '../../css/u/udid01bpg.css';
import '../../css/g/gv-8ekbkm.css';
import '../../css/t/ttb0p-bhr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lkgs06hvj secondary"/><g class="dt0cm9dhy primary"><path class="da92j5b5b"/><path class="udid01bpg"/><path class="gv-8ekbkm"/><path class="ttb0p-bhr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cloud-signal-duo"} {...others} />);
}

export default Component;
