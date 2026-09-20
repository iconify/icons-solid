import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i3ri9tbis.css';
import '../../css/l/lidcpw1ys.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="i3ri9tbis"/><path class="lidcpw1ys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-dashed-quarter"} {...others} />);
}

export default Component;
