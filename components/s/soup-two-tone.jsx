import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/th7qmabfh.css';
import '../../css/j/j51y-acob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="th7qmabfh"/><path class="j51y-acob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:soup-two-tone"} {...others} />);
}

export default Component;
