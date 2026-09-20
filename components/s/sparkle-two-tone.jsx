import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dmgku9jes.css';
import '../../css/i/iwhj6828x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dmgku9jes"/><path class="iwhj6828x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:sparkle-two-tone"} {...others} />);
}

export default Component;
