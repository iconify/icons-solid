import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pg40lro8p.css';
import '../../css/h/h6i0ijbtb.css';
import '../../css/m/msqsf4b6u.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pg40lro8p"/><path clip-rule="evenodd" class="h6i0ijbtb"/><path class="msqsf4b6u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:star-badge-flat"} {...others} />);
}

export default Component;
