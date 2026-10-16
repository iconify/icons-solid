import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kn78vdxjg.css';
import '../../css/t/tyb0fcb7h.css';
import '../../css/s/sphwanlvx.css';
import '../../css/v/veg-6o8hp.css';
import '../../css/y/yjv9dd5th.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kn78vdxjg"/><rect transform="matrix(0 -1 -1 0 7.15 20.03)" class="tyb0fcb7h"/><path class="sphwanlvx"/><rect transform="matrix(0 -1 -1 0 7.15 20.03)" class="veg-6o8hp"/><path class="yjv9dd5th"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cosmetic"} {...others} />);
}

export default Component;
