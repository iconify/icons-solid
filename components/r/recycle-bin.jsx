import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/h_214em3i.css';
import '../../css/e/eq98ucc7l.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="h_214em3i"/><path class="eq98ucc7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:recycle-bin"} {...others} />);
}

export default Component;
