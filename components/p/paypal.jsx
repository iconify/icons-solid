import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gx54pvbwb.css';
import '../../css/l/lse587a9l.css';
import '../../css/l/lmujw8bni.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="gx54pvbwb"/><path class="lse587a9l"/><path class="lmujw8bni"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:paypal"} {...others} />);
}

export default Component;
