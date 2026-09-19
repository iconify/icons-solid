import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/c/c6n_3bcym.css';
import '../../css/f/ff69knbjn.css';
import '../../css/s/sp1othbmo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="c6n_3bcym"/><path class="ff69knbjn"/><path class="sp1othbmo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:game-controller-03"} {...others} />);
}

export default Component;
