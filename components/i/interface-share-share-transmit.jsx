import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qz694km8l.css';
import '../../css/g/gowmoib0w.css';
import '../../css/m/mwc9s5vvp.css';
import '../../css/a/aq7vvs-8w.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="qz694km8l"/><circle class="gowmoib0w"/><circle class="mwc9s5vvp"/><path class="aq7vvs-8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-share-share-transmit"} {...others} />);
}

export default Component;
