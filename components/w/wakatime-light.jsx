import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pw3n31uic.css';
import '../../css/b/bww9v6dvb.css';

const viewBox = {"width":340,"height":340};
const content = `<g class="ft5dv1b6b"><path class="pw3n31uic"/><path class="bww9v6dvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:wakatime-light"} {...others} />);
}

export default Component;
