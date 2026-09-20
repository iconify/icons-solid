import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/z3cu6f1-m.css';
import '../../css/c/cshtojb9k.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="z3cu6f1-m"/><path class="cshtojb9k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:customer-support-5"} {...others} />);
}

export default Component;
