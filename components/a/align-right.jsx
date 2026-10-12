import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nh_az585f.css';
import '../../css/q/qkarmfb0f.css';
import '../../css/k/kqyovi-of.css';
import '../../css/n/n-tf76b-g.css';
import '../../css/a/avt5dubas.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(90 18.88 3.85)" class="nh_az585f"/><rect transform="rotate(90 18.88 13.85)" class="qkarmfb0f"/><rect transform="rotate(90 18.88 13.85)" class="kqyovi-of"/><rect transform="rotate(90 18.88 3.85)" class="n-tf76b-g"/><path class="avt5dubas"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:align-right"} {...others} />);
}

export default Component;
