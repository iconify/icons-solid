import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m23vo5mck.css';
import '../../css/s/s70b2cb2s.css';
import '../../css/r/rsy4chbta.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="m23vo5mck"/><path class="s70b2cb2s"/><path class="rsy4chbta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:town"} {...others} />);
}

export default Component;
