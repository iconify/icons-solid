import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/laq682b3r.css';
import '../../css/j/jj1j1acvi.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="laq682b3r"/><path class="jj1j1acvi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:database"} {...others} />);
}

export default Component;
