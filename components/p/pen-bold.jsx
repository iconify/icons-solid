import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oky3v059h.css';
import '../../css/f/foe0t-bls.css';
import '../../css/s/ssgiq9b_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="oky3v059h"/><circle transform="rotate(-180 11 11)" class="foe0t-bls"/><path class="ssgiq9b_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:pen-bold"} {...others} />);
}

export default Component;
