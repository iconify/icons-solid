import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/c-mhhm1pp.css';
import '../../css/f/fwyfrqagk.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="c-mhhm1pp"/><path class="fwyfrqagk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:ios-ipados"} {...others} />);
}

export default Component;
