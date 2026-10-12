import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lxq6z8b2b.css';
import '../../css/h/hzgd0t5wk.css';
import '../../css/a/aqwr5vbab.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lxq6z8b2b"/><path class="hzgd0t5wk"/><path class="aqwr5vbab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sun-snow"} {...others} />);
}

export default Component;
