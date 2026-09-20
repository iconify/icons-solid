import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gzyupn04a.css';
import '../../css/p/prod96b7v.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="gzyupn04a"/><circle class="prod96b7v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:nature-ecology-tree-2-tree-plant-circle-round-park"} {...others} />);
}

export default Component;
