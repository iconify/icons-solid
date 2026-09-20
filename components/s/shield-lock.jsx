import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/w0r4owbrt.css';
import '../../css/m/mfkj-_b9y.css';
import '../../css/m/mdv60cckr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="w0r4owbrt"/><path class="mfkj-_b9y"/><rect class="mdv60cckr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:shield-lock"} {...others} />);
}

export default Component;
