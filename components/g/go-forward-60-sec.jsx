import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/n/n2paeub8p.css';
import '../../css/c/c1vqarbez.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="n2paeub8p"/><path class="c1vqarbez"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:go-forward-60-sec"} {...others} />);
}

export default Component;
