import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/g/gp8i3-bir.css';
import '../../css/f/fhacfpcwp.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="gp8i3-bir"/><path class="fhacfpcwp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:darklua"} {...others} />);
}

export default Component;
