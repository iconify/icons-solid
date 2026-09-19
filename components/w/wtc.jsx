import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/if8avqb2l.css';
import '../../css/x/x-hw30lbb.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="n1lsf0bnc"><path class="if8avqb2l"/><path class="x-hw30lbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency:wtc"} {...others} />);
}

export default Component;
