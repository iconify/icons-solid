import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jl8wlmp8e.css';
import '../../css/s/sflf_gome.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jl8wlmp8e"/><path class="sflf_gome"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:eye-strike-fill-20"} {...others} />);
}

export default Component;
