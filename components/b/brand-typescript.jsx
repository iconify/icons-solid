import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pbje22bpc.css';
import '../../css/b/bahh2x57i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pbje22bpc"/><path class="bahh2x57i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-typescript"} {...others} />);
}

export default Component;
