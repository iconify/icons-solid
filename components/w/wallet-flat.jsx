import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jorfdtb8l.css';
import '../../css/b/bjsyczbay.css';
import '../../css/n/n5v0ddc-k.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="jorfdtb8l"/><path class="bjsyczbay"/><path clip-rule="evenodd" class="n5v0ddc-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:wallet-flat"} {...others} />);
}

export default Component;
