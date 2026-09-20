import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fxdgxwbqi.css';
import '../../css/e/e0ao_zgiq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="fxdgxwbqi"/><path class="e0ao_zgiq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:user-feedback-heart"} {...others} />);
}

export default Component;
