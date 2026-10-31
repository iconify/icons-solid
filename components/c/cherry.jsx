import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mu_j_xboj.css';
import '../../css/n/n88d96rih.css';
import '../../css/n/n8j2c2bem.css';
import '../../css/e/eegaxhabc.css';
import '../../css/a/agduiccem.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="mu_j_xboj wm-shadow"/><path class="n88d96rih"/><path class="n8j2c2bem"/><path class="eegaxhabc"/><path class="agduiccem"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:cherry"} {...others} />);
}

export default Component;
