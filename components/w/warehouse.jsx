import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/ird2dkdlx.css';
import '../../css/u/ulzs4-baa.css';
import '../../css/u/ux1_c-b-p.css';
import '../../css/c/cjqswry8o.css';
import '../../css/a/abwioqdgh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ird2dkdlx wm-shadow"/><path class="ulzs4-baa wm-shadow"/><path class="ux1_c-b-p"/><path class="cjqswry8o"/><path class="abwioqdgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:warehouse"} {...others} />);
}

export default Component;
