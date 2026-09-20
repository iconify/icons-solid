import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p5buu7h6r.css';
import '../../css/o/or83j__gr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="p5buu7h6r"/><path class="or83j__gr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:receipt-pound-sterling"} {...others} />);
}

export default Component;
