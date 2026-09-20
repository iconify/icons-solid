import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/llbqq6_8d.css';
import '../../css/v/v6y39vytb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="llbqq6_8d"/><path class="v6y39vytb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:chromecast-line"} {...others} />);
}

export default Component;
