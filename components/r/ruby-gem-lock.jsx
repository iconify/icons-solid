import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/v/vxck0rbst.css';
import '../../css/m/mqkui3bsu.css';
import '../../css/m/m-24ijb3r.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="vxck0rbst"/><path class="mqkui3bsu"/><path class="m-24ijb3r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:ruby-gem-lock"} {...others} />);
}

export default Component;
