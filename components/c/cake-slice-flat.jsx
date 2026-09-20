import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a56cztbtr.css';
import '../../css/z/z7lpwabnn.css';
import '../../css/u/ucqslmf0g.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a56cztbtr"/><path class="z7lpwabnn"/><path class="ucqslmf0g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:cake-slice-flat"} {...others} />);
}

export default Component;
