import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pqe01s-uy.css';
import '../../css/v/vm3y-4h5x.css';
import '../../css/t/tgozcjbqw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="pqe01s-uy"/><path class="vm3y-4h5x"/><path class="tgozcjbqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bluetooth-wave-bold"} {...others} />);
}

export default Component;
