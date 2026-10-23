import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zaxmokbbl.css';
import '../../css/u/uh_iprkea.css';
import '../../css/s/s-e8fnbaj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zaxmokbbl"/><path class="uh_iprkea"/><path class="s-e8fnbaj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:egg-fried"} {...others} />);
}

export default Component;
