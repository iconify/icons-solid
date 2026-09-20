import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/v8ob8cb-p.css';
import '../../css/r/r8tb_9mja.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="v8ob8cb-p"/><path class="r8tb_9mja"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:upload-box-1"} {...others} />);
}

export default Component;
