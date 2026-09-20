import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iwlx8zbnc.css';
import '../../css/m/mu-ztlk9y.css';
import '../../css/h/ha9hvp8dc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="iwlx8zbnc"/><path class="mu-ztlk9y"/><path class="ha9hvp8dc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:disability-wheelchair"} {...others} />);
}

export default Component;
