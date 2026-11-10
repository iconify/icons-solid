import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ansjtswah.css';
import '../../css/h/hcxw8vkls.css';
import '../../css/w/w8ml0s3hx.css';
import '../../css/l/ld6h9lznm.css';
import '../../css/h/hjegxfwfx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ansjtswah"/><path class="hcxw8vkls"/><circle class="w8ml0s3hx"/><path class="ld6h9lznm"/><path class="hjegxfwfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:turntable"} {...others} />);
}

export default Component;
