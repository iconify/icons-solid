import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/y/y6wb7m0iu.css';
import '../../css/a/ad2h2ac6u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="y6wb7m0iu"/><path class="ad2h2ac6u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:code-solid"} {...others} />);
}

export default Component;
