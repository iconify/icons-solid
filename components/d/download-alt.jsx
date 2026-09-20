import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jtowsomii.css';
import '../../css/n/n1i6_2bkg.css';
import '../../css/z/zukmucctw.css';

const viewBox = {"width":21,"height":21};
const content = `<g class="jtowsomii"><path class="n1i6_2bkg"/><path class="zukmucctw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:download-alt"} {...others} />);
}

export default Component;
