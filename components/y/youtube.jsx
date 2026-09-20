import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gb9mrrbso.css';
import '../../css/e/e4j3uccqe.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="gb9mrrbso"/><path class="e4j3uccqe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:youtube"} {...others} />);
}

export default Component;
