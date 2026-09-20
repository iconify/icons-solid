import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vogfxkb9o.css';
import '../../css/k/kf48j8exx.css';
import '../../css/b/bjo9aeylz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vogfxkb9o"/><path class="kf48j8exx"/><path class="bjo9aeylz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:baby-milk-bottle"} {...others} />);
}

export default Component;
