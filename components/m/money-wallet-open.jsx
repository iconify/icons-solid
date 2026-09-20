import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pturp2bhc.css';
import '../../css/o/ojt3mcbzj.css';
import '../../css/r/rzsggxn3c.css';
import '../../css/e/e67xv9bsc.css';
import '../../css/i/ihen938et.css';
import '../../css/l/l-drr12rk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pturp2bhc"/><path class="ojt3mcbzj"/><path class="rzsggxn3c"/><path class="e67xv9bsc"/><path class="ihen938et"/><path class="l-drr12rk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:money-wallet-open"} {...others} />);
}

export default Component;
