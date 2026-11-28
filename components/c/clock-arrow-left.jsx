import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tc07prbkf.css';
import '../../css/e/ejnqsif1c.css';
import '../../css/y/ylnbz1h1b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tc07prbkf"/><path class="ejnqsif1c"/><path class="ylnbz1h1b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:clock-arrow-left"} {...others} />);
}

export default Component;
