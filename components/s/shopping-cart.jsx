import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jec50dbaz.css';
import '../../css/b/bqu-4jb8x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="jec50dbaz"/><path class="bqu-4jb8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:shopping-cart"} {...others} />);
}

export default Component;
