import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dv7-g1bjh.css';
import '../../css/j/jq6wkjbcr.css';
import '../../css/v/vrp8r0vqw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dv7-g1bjh"/><path clip-rule="evenodd" class="jq6wkjbcr"/><path class="vrp8r0vqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:iris-scan-flat"} {...others} />);
}

export default Component;
