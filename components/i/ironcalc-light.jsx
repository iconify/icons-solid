import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jl2f_dlbg.css';
import '../../css/e/erolj7bif.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jl2f_dlbg"/><path class="erolj7bif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ironcalc-light"} {...others} />);
}

export default Component;
