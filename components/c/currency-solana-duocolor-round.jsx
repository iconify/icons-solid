import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sggkhmbre.css';
import '../../css/u/uhfpy1bub.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sggkhmbre"/><path class="uhfpy1bub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:currency-solana-duocolor-round"} {...others} />);
}

export default Component;
