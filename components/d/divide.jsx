import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/ryk8grbre.css';
import '../../css/m/mh3bxnbwq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="ryk8grbre"/><path class="mh3bxnbwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:divide"} {...others} />);
}

export default Component;
