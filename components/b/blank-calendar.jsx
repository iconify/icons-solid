import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/seykvkn8r.css';
import '../../css/d/ds9hzkbzu.css';
import '../../css/u/uhzobyyzz.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="seykvkn8r"/><path class="ds9hzkbzu"/><path class="uhzobyyzz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:blank-calendar"} {...others} />);
}

export default Component;
