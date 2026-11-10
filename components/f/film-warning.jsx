import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w69pz5srx.css';
import '../../css/y/y9rua-zqa.css';
import '../../css/q/qu9fsbcko.css';
import '../../css/w/wjqc_6z_x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w69pz5srx"/><path class="y9rua-zqa"/><path class="qu9fsbcko"/><path class="wjqc_6z_x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:film-warning"} {...others} />);
}

export default Component;
