import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hkv8d4byc.css';
import '../../css/a/a0ro5ub5v.css';
import '../../css/m/m2jmnq7zl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hkv8d4byc"/><path class="a0ro5ub5v"/><path class="m2jmnq7zl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:screen-share"} {...others} />);
}

export default Component;
