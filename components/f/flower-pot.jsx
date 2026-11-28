import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wihze5byz.css';
import '../../css/s/sqmzwohrn.css';
import '../../css/i/ixw8p37-r.css';
import '../../css/l/l8k40_qvc.css';
import '../../css/u/ucia3bc2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wihze5byz"/><path class="sqmzwohrn"/><path class="ixw8p37-r"/><path class="l8k40_qvc"/><path class="ucia3bc2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:flower-pot"} {...others} />);
}

export default Component;
