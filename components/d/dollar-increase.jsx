import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/x/xqbj_3bun.css';
import '../../css/f/fygbrs_6n.css';
import '../../css/n/no9c02baj.css';
import '../../css/q/q_p_hwbpm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="xqbj_3bun"/><path class="fygbrs_6n"/><path class="no9c02baj"/><path class="q_p_hwbpm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:dollar-increase"} {...others} />);
}

export default Component;
