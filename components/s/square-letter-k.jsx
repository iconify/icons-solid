import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xky9ngkyv.css';
import '../../css/p/pdz_t30dw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xky9ngkyv"/><path class="pdz_t30dw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:square-letter-k"} {...others} />);
}

export default Component;
