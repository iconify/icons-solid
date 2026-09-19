import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/o/ojvzb-73z.css';
import '../../css/i/i_kaqkpye.css';
import '../../css/x/x5yfotb1n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="ojvzb-73z"/><path class="i_kaqkpye"/><path class="x5yfotb1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:relay-outline"} {...others} />);
}

export default Component;
