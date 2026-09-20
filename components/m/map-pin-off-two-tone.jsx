import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t41omzb7x.css';
import '../../css/x/xazo8yt0n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t41omzb7x"/><path class="xazo8yt0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:map-pin-off-two-tone"} {...others} />);
}

export default Component;
