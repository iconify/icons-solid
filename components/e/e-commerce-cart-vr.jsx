import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xoazu-hon.css';
import '../../css/c/cg6icibsc.css';
import '../../css/k/knvapgc9x.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xoazu-hon"/><path class="cg6icibsc"/><path class="knvapgc9x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:e-commerce-cart-vr"} {...others} />);
}

export default Component;
