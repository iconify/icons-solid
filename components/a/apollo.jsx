import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulra56alq.css';
import '../../css/x/xrqhfhb1a.css';
import '../../css/a/axioowbpp.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ulra56alq"><path class="xrqhfhb1a"/><path class="axioowbpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:apollo"} {...others} />);
}

export default Component;
