import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kzmnvikyr.css';
import '../../css/k/kaaj88bma.css';
import '../../css/k/kiwzkfnae.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="kzmnvikyr"/><path clip-rule="evenodd" class="kaaj88bma"/><path class="kiwzkfnae"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:image-minus"} {...others} />);
}

export default Component;
