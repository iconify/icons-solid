import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wcqt7wwpl.css';
import '../../css/i/i9qxuzbiz.css';
import '../../css/c/ce38m5bqe.css';
import '../../css/k/kyghrub6c.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="wcqt7wwpl"/><path class="i9qxuzbiz"/><path class="ce38m5bqe"/><path class="kyghrub6c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:steps-2"} {...others} />);
}

export default Component;
