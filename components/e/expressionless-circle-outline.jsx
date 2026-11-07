import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dsdupsbro.css';
import '../../css/v/vu18-_bab.css';
import '../../css/l/lg9shfpyb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dsdupsbro"/><path class="vu18-_bab"/><path class="lg9shfpyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:expressionless-circle-outline"} {...others} />);
}

export default Component;
