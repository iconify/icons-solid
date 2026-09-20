import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/l-dg9actt.css';
import '../../css/z/zpvff4bca.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="l-dg9actt"/><path class="zpvff4bca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:file-bookmark"} {...others} />);
}

export default Component;
