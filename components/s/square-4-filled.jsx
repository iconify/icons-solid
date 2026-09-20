import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/t/t_ev7s-sv.css';
import '../../css/e/euc5lsbsp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n8oo7gb6g"><path class="t_ev7s-sv"/><path class="euc5lsbsp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:square-4-filled"} {...others} />);
}

export default Component;
