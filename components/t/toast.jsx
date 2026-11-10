import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/s13gb53ec.css';
import '../../css/v/v_tsadckf.css';
import '../../css/o/okceg-hhl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="s13gb53ec"/><path class="v_tsadckf"/><path class="okceg-hhl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:toast"} {...others} />);
}

export default Component;
