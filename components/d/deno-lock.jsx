import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/m/m-24ijb3r.css';
import '../../css/y/yvv_74c9b.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="m-24ijb3r"/><path class="yvv_74c9b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:deno-lock"} {...others} />);
}

export default Component;
