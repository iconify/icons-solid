import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a4f8dp2co.css';
import '../../css/a/ahx--ib1o.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="a4f8dp2co"/><path class="ahx--ib1o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:compass-navigator-flat"} {...others} />);
}

export default Component;
