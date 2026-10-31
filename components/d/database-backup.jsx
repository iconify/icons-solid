import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/s9fdekqig.css';
import '../../css/z/zakzyxgdv.css';
import '../../css/p/pqk2s-bcy.css';
import '../../css/v/v_9c2zbsp.css';
import '../../css/w/w5yx3zbwt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="s9fdekqig wm-shadow"/><path class="wm-shadow zakzyxgdv"/><path class="pqk2s-bcy"/><path class="v_9c2zbsp"/><path class="w5yx3zbwt wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:database-backup"} {...others} />);
}

export default Component;
