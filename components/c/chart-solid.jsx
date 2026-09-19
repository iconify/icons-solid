import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/u/uggf2rhpd.css';
import '../../css/w/wf3e7vb2e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="uggf2rhpd"/><path class="wf3e7vb2e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:chart-solid"} {...others} />);
}

export default Component;
