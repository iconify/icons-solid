import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/k/kubnetbnt.css';
import '../../css/a/a3vjuvb4t.css';
import '../../css/r/ra0h9-09a.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="kubnetbnt"/><path class="a3vjuvb4t"/><path class="ra0h9-09a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:astro-config"} {...others} />);
}

export default Component;
