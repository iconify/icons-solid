import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ffclrobbn.css';
import '../../css/v/vsxun6bmm.css';
import '../../css/f/frhmk4zcr.css';
import '../../css/f/f61bxactw.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="ffclrobbn"/><path class="vsxun6bmm"/><path class="frhmk4zcr"/><path class="f61bxactw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:kw"} {...others} />);
}

export default Component;
