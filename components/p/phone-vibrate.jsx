import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqax-6b-d.css';
import '../../css/k/ko0nadpjq.css';
import '../../css/v/vgcxerb0z.css';
import '../../css/k/kko1jcctn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="jqax-6b-d"><path class="ko0nadpjq"/><path class="vgcxerb0z"/><path class="kko1jcctn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:phone-vibrate"} {...others} />);
}

export default Component;
