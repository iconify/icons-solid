import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/ovpnd7bcb.css';
import '../../css/p/pu7xdrmve.css';
import '../../css/k/kn939cpym.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="ovpnd7bcb"/><circle class="pu7xdrmve"/><path class="kn939cpym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-places-anchor-anchor-marina-harbor-port"} {...others} />);
}

export default Component;
