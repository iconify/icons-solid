import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oe3eu-xnt.css';
import '../../css/g/gkiq2cbvo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="oe3eu-xnt"/><path class="gkiq2cbvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:trophy"} {...others} />);
}

export default Component;
