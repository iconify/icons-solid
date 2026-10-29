import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qb-mlqbns.css';
import '../../css/e/esc57vs2e.css';
import '../../css/r/r40fi4qti.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="qb-mlqbns"/><path class="esc57vs2e wm-k"/><path class="r40fi4qti wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:surprised-sketch"} {...others} />);
}

export default Component;
