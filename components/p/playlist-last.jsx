import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ffuho1b6v.css';
import '../../css/n/n_b95b1an.css';
import '../../css/d/dfnua36xv.css';
import '../../css/y/y-8edmb2c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="rotate(90 21.58 13.63)" class="ffuho1b6v"/><path class="n_b95b1an"/><rect transform="rotate(90 21.58 13.63)" class="dfnua36xv"/><path class="y-8edmb2c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:playlist-last"} {...others} />);
}

export default Component;
