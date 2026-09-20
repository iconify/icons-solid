import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/m/m2iliv-hd.css';
import '../../css/e/e1z4dhbzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="m2iliv-hd"/><path class="e1z4dhbzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:recording-tape-2"} {...others} />);
}

export default Component;
