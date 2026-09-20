import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/odbtl65bb.css';
import '../../css/g/gg2v5d73k.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="odbtl65bb"/><path class="gg2v5d73k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:target"} {...others} />);
}

export default Component;
