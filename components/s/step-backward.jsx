import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w_5c_zbqq.css';
import '../../css/a/ajae2sbag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w_5c_zbqq"/><path class="ajae2sbag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:step-backward"} {...others} />);
}

export default Component;
