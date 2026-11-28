import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/djhm11b9z.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l4--ovbba.css';
import '../../css/x/xeq28t4zp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="djhm11b9z secondary"/><g class="dt0cm9dhy primary"><path class="l4--ovbba"/><path class="xeq28t4zp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:badge-star-duo"} {...others} />);
}

export default Component;
