import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d-zgppq4g.css';
import '../../css/z/zy_l2lb3p.css';
import '../../css/s/s9cto8mbf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d-zgppq4g"/><path class="zy_l2lb3p"/><path class="s9cto8mbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:house-plug"} {...others} />);
}

export default Component;
