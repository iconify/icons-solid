import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/it84gzbsp.css';
import '../../css/n/n05xy0btt.css';
import '../../css/n/n7-jbgbqq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="it84gzbsp"/><path class="n05xy0btt"/><path class="n7-jbgbqq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:sun-snow"} {...others} />);
}

export default Component;
