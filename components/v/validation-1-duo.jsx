import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dk1zpm-hn.css';
import '../../css/j/j0d7q5h2p.css';
import '../../css/m/m6e2ex0xx.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="dk1zpm-hn"><path class="j0d7q5h2p"/><path class="m6e2ex0xx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:validation-1-duo"} {...others} />);
}

export default Component;
