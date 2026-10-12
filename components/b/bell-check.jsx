import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f05yqackh.css';
import '../../css/v/vuv-vubvh.css';
import '../../css/w/wnplm3jvw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f05yqackh"/><path class="vuv-vubvh"/><path class="wnplm3jvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bell-check"} {...others} />);
}

export default Component;
