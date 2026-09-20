import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gcrhrmmun.css';
import '../../css/f/fdk6ytbkq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gcrhrmmun"/><path class="fdk6ytbkq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:globe-plus-fill"} {...others} />);
}

export default Component;
