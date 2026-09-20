import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y7k-jqbbe.css';
import '../../css/a/a440gn4za.css';
import '../../css/p/p6z24_dxu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="y7k-jqbbe"/><path clip-rule="evenodd" class="a440gn4za"/><path clip-rule="evenodd" class="p6z24_dxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:ok-hand-flat"} {...others} />);
}

export default Component;
