import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/akttfdcoa.css';
import '../../css/a/atmw7hb7t.css';
import '../../css/h/h1wcxz_fz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="akttfdcoa"/><path class="atmw7hb7t"/><path class="h1wcxz_fz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:octopus"} {...others} />);
}

export default Component;
