import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l5q0p9bmc.css';
import '../../css/o/ob-x9ab0f.css';
import '../../css/r/r25ipg7te.css';
import '../../css/u/u99kjbv1u.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="l5q0p9bmc"/><path class="ob-x9ab0f"/><path class="r25ipg7te"/><path class="u99kjbv1u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:credit-card-smartphone"} {...others} />);
}

export default Component;
