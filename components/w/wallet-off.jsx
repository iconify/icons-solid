import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u8u0ujbfn.css';
import '../../css/t/tq86e6b7c.css';
import '../../css/u/u3nlt5bzy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="u8u0ujbfn"/><path class="tq86e6b7c"/><path class="u3nlt5bzy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:wallet-off"} {...others} />);
}

export default Component;
