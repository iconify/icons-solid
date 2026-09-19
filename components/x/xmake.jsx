import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/i7is_ifym.css';
import '../../css/v/vkkts6n9q.css';
import '../../css/v/vgkh8tqot.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="i7is_ifym"/><path class="vkkts6n9q"/><path class="vgkh8tqot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:xmake"} {...others} />);
}

export default Component;
