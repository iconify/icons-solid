import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wi-78m4mi.css';
import '../../css/k/kkyppl-5m.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="wi-78m4mi"/><path class="kkyppl-5m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:matlab"} {...others} />);
}

export default Component;
