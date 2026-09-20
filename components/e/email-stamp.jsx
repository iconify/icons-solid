import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l57b98btq.css';
import '../../css/a/axwg7nb4j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l57b98btq"/><path class="axwg7nb4j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:email-stamp"} {...others} />);
}

export default Component;
