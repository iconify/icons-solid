import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/k2k6wrbli.css';
import '../../css/u/uk4liwe1r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="k2k6wrbli"/><path class="uk4liwe1r wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:contactless-duo"} {...others} />);
}

export default Component;
