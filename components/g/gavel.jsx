import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f9sd35cvs.css';
import '../../css/h/haan32b3y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f9sd35cvs"/><path class="haan32b3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:gavel"} {...others} />);
}

export default Component;
