import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/h/h9ei6dbpa.css';
import '../../css/j/j2kqu2bci.css';
import '../../css/f/f-g4jnfew.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="h9ei6dbpa"/><rect transform="rotate(-45 5.071 33.071)" class="j2kqu2bci"/><path class="f-g4jnfew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:sandwich-one"} {...others} />);
}

export default Component;
