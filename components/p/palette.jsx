import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/iaznofk-p.css';
import '../../css/g/g0smyob9k.css';
import '../../css/u/upffe9zjq.css';
import '../../css/d/dacj2kbmi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="iaznofk-p"/><circle class="g0smyob9k"/><circle class="upffe9zjq"/><path class="dacj2kbmi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:palette"} {...others} />);
}

export default Component;
