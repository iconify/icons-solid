import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/l1wis9mfp.css';
import '../../css/d/dv5e62btd.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="l1wis9mfp"/><path class="dv5e62btd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:copy-2"} {...others} />);
}

export default Component;
