import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/exs1mfijk.css';
import '../../css/t/t0jnu4rru.css';
import '../../css/v/vz1aq80mm.css';
import '../../css/x/xs-34tbup.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="exs1mfijk"/><path class="t0jnu4rru"/><path class="vz1aq80mm"/><path class="xs-34tbup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:container-linear"} {...others} />);
}

export default Component;
