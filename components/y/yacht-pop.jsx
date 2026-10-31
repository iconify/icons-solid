import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/li9c3kb4f.css';
import '../../css/t/two2dcbps.css';
import '../../css/f/fadns82xg.css';
import '../../css/e/e0gd90big.css';
import '../../css/k/kfl0b1bln.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="li9c3kb4f"/><path class="two2dcbps"/><path class="fadns82xg"/><path class="e0gd90big"/><path class="kfl0b1bln"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:yacht-pop"} {...others} />);
}

export default Component;
