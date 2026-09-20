import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/w2_6mev2t.css';
import '../../css/x/xeuxdm6-b.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="w2_6mev2t"/><path class="xeuxdm6-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:alien"} {...others} />);
}

export default Component;
