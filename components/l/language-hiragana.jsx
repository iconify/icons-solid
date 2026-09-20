import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x3cm_ib_i.css';
import '../../css/v/vnm4bnbmm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x3cm_ib_i"/><path class="vnm4bnbmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:language-hiragana"} {...others} />);
}

export default Component;
