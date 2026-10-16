import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v099keier.css';
import '../../css/x/xs-nj0bju.css';
import '../../css/r/rg11vsbrt.css';
import '../../css/f/fux-f_bmp.css';
import '../../css/d/d6ek-x1th.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v099keier"/><path class="xs-nj0bju"/><path class="rg11vsbrt"/><rect transform="matrix(-1 0 0 1 14.31 6.44)" class="fux-f_bmp"/><path class="d6ek-x1th"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:mouse-left"} {...others} />);
}

export default Component;
