import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/naszw4bgc.css';
import '../../css/j/jlw-3trev.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="naszw4bgc"/><path class="jlw-3trev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:door-open-fill"} {...others} />);
}

export default Component;
