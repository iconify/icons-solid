import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/r/rmihnpbhj.css';
import '../../css/v/vb7m3437e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="rmihnpbhj"/><path class="vb7m3437e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:scan-light"} {...others} />);
}

export default Component;
