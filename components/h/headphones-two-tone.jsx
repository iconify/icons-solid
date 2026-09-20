import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dk__bzbcp.css';
import '../../css/t/ti345ebey.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dk__bzbcp"/><path class="ti345ebey"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:headphones-two-tone"} {...others} />);
}

export default Component;
