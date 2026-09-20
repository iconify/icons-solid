import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rcd-wfdbo.css';
import '../../css/k/k-k38lq0d.css';
import '../../css/t/t76woky8h.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rcd-wfdbo"/><path class="k-k38lq0d"/><path class="t76woky8h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:phone-actions-ringing"} {...others} />);
}

export default Component;
