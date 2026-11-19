import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qz4l92b3x.css';
import '../../css/t/taq-skbqs.css';
import '../../css/g/gf4z2jg7k.css';
import '../../css/e/ex428htal.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qz4l92b3x"/><path class="taq-skbqs"/><path class="gf4z2jg7k"/><path class="ex428htal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:browser-lightning"} {...others} />);
}

export default Component;
