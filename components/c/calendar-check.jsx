import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w3xd78b5b.css';
import '../../css/p/pjr0yofbb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w3xd78b5b"/><path class="pjr0yofbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:calendar-check"} {...others} />);
}

export default Component;
