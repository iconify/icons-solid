import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hdf5ubb_p.css';
import '../../css/d/dfnqwhboe.css';
import '../../css/l/lx_y9rcby.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="hdf5ubb_p"/><path clip-rule="evenodd" class="dfnqwhboe"/><path class="lx_y9rcby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:clock-alarm"} {...others} />);
}

export default Component;
