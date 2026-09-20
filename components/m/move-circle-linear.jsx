import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c4v1z3pvf.css';
import '../../css/d/dfvtxfbxr.css';
import '../../css/g/gshkn9qqt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="c4v1z3pvf"/><path class="dfvtxfbxr"/><path class="gshkn9qqt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:move-circle-linear"} {...others} />);
}

export default Component;
