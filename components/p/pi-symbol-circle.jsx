import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/y-_1uigqo.css';
import '../../css/f/fwr_23v4y.css';
import '../../css/c/c2pt0nkql.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="y-_1uigqo"/><path class="fwr_23v4y"/><path class="c2pt0nkql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:pi-symbol-circle"} {...others} />);
}

export default Component;
