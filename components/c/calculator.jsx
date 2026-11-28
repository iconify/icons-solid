import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/te-6n-baq.css';
import '../../css/e/eh8r4ccab.css';
import '../../css/e/e2cr6acpy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="te-6n-baq"/><path class="eh8r4ccab"/><path class="e2cr6acpy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:calculator"} {...others} />);
}

export default Component;
