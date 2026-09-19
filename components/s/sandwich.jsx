import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/n/ncp28ccos.css';
import '../../css/b/biimt8bww.css';
import '../../css/f/ftfrwq2bw.css';
import '../../css/h/hvz7xwnpr.css';
import '../../css/f/fwrvuqbgt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="ncp28ccos"/><path class="biimt8bww"/><path class="ftfrwq2bw"/><path class="hvz7xwnpr"/><path class="fwrvuqbgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:sandwich"} {...others} />);
}

export default Component;
