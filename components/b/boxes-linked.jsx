import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/ej8a_q71d.css';
import '../../css/h/h3jot2smo.css';
import '../../css/f/fu_f8lhid.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ej8a_q71d"/><path class="h3jot2smo"/><path class="fu_f8lhid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:boxes-linked"} {...others} />);
}

export default Component;
