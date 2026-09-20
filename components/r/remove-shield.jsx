import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uobvbi9ub.css';
import '../../css/i/id_e23b2b.css';
import '../../css/k/k4sov4b-u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uobvbi9ub"/><path class="id_e23b2b"/><path class="k4sov4b-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:remove-shield"} {...others} />);
}

export default Component;
