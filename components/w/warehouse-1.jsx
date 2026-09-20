import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qz6iu8b0e.css';
import '../../css/f/f-wka2cbh.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="qz6iu8b0e"/><path class="f-wka2cbh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:warehouse-1"} {...others} />);
}

export default Component;
