import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/l3i4eqbnf.css';
import '../../css/k/k59f9ebtr.css';
import '../../css/n/nmc1rlb0c.css';
import '../../css/m/mw2wcobik.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="l3i4eqbnf"/><path class="k59f9ebtr"/><circle class="nmc1rlb0c"/><path class="mw2wcobik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:chat-search-light"} {...others} />);
}

export default Component;
