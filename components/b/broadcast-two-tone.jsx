import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cvnsuabtc.css';
import '../../css/w/wdvw_nbtq.css';
import '../../css/f/f7d702b9j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cvnsuabtc"/><path class="wdvw_nbtq"/><path class="f7d702b9j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:broadcast-two-tone"} {...others} />);
}

export default Component;
