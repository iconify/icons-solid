import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/iepueqoam.css';
import '../../css/j/jdzoki6fy.css';
import '../../css/a/a58f3knfd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="iepueqoam"/><path class="jdzoki6fy"/><path class="a58f3knfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dialog-line-duotone"} {...others} />);
}

export default Component;
