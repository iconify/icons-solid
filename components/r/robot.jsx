import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s6r87qy8a.css';
import '../../css/n/nzlrb5bjk.css';
import '../../css/g/g6y5ocbly.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="s6r87qy8a"/><path class="nzlrb5bjk"/><path class="g6y5ocbly"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:robot"} {...others} />);
}

export default Component;
