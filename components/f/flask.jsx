import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/x/xxysssc4x.css';
import '../../css/x/x1mme-tue.css';
import '../../css/m/mj1my2lvo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="xxysssc4x"/><path class="x1mme-tue"/><path class="mj1my2lvo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:flask"} {...others} />);
}

export default Component;
