import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/g5vuqacpt.css';
import '../../css/p/pnkpf5b4r.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="g5vuqacpt"/><path class="pnkpf5b4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:soft-drink-can"} {...others} />);
}

export default Component;
