import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xa25e2bcx.css';
import '../../css/y/y3v2ytjze.css';
import '../../css/v/vs-z1vb4f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xa25e2bcx"/><path class="y3v2ytjze"/><path class="vs-z1vb4f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:calendar-sparkles-two-tone"} {...others} />);
}

export default Component;
