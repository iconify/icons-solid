import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p71h2fb2r.css';
import '../../css/u/uijum5buq.css';
import '../../css/u/uru2fok5k.css';
import '../../css/b/bf4c_jqur.css';
import '../../css/k/k5vniu2ml.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p71h2fb2r"/><path class="uijum5buq"/><path class="uru2fok5k"/><path class="bf4c_jqur"/><path class="k5vniu2ml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:asteroid"} {...others} />);
}

export default Component;
