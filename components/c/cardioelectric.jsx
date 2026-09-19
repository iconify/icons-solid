import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/r/ryl7c4biq.css';
import '../../css/k/kx98x3blk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ryl7c4biq"/><path class="kx98x3blk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cardioelectric"} {...others} />);
}

export default Component;
