import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f_pv1tbov.css';
import '../../css/s/sdsnqtvsn.css';
import '../../css/c/che3vpvsq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f_pv1tbov"/><path class="sdsnqtvsn"/><path class="che3vpvsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:lamp-light"} {...others} />);
}

export default Component;
