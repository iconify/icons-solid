import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yx6i158qc.css';
import '../../css/m/m47e-zmsb.css';
import '../../css/i/id0zv0baq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yx6i158qc"/><path class="m47e-zmsb"/><path clip-rule="evenodd" class="id0zv0baq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:nurse-hat-flat"} {...others} />);
}

export default Component;
