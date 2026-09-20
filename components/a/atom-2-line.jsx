import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iy3ab66ne.css';
import '../../css/z/zy02t9bhd.css';
import '../../css/k/kugl8-b3l.css';
import '../../css/h/h_tsn8bxt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="iy3ab66ne"/><circle transform="rotate(45 17.657 6.343)" class="zy02t9bhd"/><circle transform="rotate(45 6.343 17.657)" class="kugl8-b3l"/><circle transform="rotate(45 12 12)" class="h_tsn8bxt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:atom-2-line"} {...others} />);
}

export default Component;
