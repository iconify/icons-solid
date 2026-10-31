import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a99dawbxs.css';
import '../../css/o/ou4llgytr.css';
import '../../css/r/rui3uwbpt.css';
import '../../css/x/xq8ohifvd.css';
import '../../css/r/rhraiil6z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="a99dawbxs wm-shadow"/><path class="ou4llgytr wm-shadow"/><path class="rui3uwbpt"/><path class="xq8ohifvd"/><path class="rhraiil6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:medal"} {...others} />);
}

export default Component;
