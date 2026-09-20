import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jyrdfxc4y.css';
import '../../css/n/nuawqebwr.css';
import '../../css/a/an1twj29f.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="jyrdfxc4y"/><path class="nuawqebwr"/><path class="an1twj29f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:airport-plane-transit"} {...others} />);
}

export default Component;
