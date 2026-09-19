import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/ezi5a8b1n.css';
import '../../css/n/nfti56wmf.css';
import '../../css/p/pbdi6_6bs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="ezi5a8b1n"/><path class="nfti56wmf"/><path class="pbdi6_6bs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-not-found-04"} {...others} />);
}

export default Component;
