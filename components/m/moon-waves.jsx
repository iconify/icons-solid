import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/coz7yj4ky.css';
import '../../css/i/il8ylcbwt.css';
import '../../css/e/e5l2fcw6v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="coz7yj4ky"/><path class="il8ylcbwt"/><path class="e5l2fcw6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:moon-waves"} {...others} />);
}

export default Component;
