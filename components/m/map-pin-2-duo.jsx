import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ycndf0b4v.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nf36psyjd.css';
import '../../css/j/jne71jnre.css';
import '../../css/n/nhh2o_iiy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary ycndf0b4v"/><g class="dt0cm9dhy primary"><path class="nf36psyjd"/><path class="jne71jnre"/><path class="nhh2o_iiy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:map-pin-2-duo"} {...others} />);
}

export default Component;
