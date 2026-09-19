import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/i/i4xym8b0m.css';
import '../../css/v/v6ukwccfe.css';
import '../../css/s/slyhgd-ej.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="i4xym8b0m"/><path class="v6ukwccfe"/><path class="slyhgd-ej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:folder-renovate-open"} {...others} />);
}

export default Component;
