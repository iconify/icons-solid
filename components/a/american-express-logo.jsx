import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j7gn8qbkp.css';
import '../../css/j/jvuj7v2wp.css';
import '../../css/g/gg2p7cbap.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="j7gn8qbkp"/><path clip-rule="evenodd" class="jvuj7v2wp"/><path class="gg2p7cbap"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:american-express-logo"} {...others} />);
}

export default Component;
