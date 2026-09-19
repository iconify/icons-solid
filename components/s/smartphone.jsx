import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j54a0sjre.css';
import '../../css/d/d_zw_fy9l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="j54a0sjre"/><path class="d_zw_fy9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:smartphone"} {...others} />);
}

export default Component;
