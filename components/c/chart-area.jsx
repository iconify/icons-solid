import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l3khmkb3a.css';
import '../../css/j/j9wrs-0li.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="l3khmkb3a"/><path class="j9wrs-0li"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:chart-area"} {...others} />);
}

export default Component;
