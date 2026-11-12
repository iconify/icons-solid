import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jsmqtmb6f.css';
import '../../css/b/by36zj_hl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jsmqtmb6f"/><path class="by36zj_hl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:shopping-bag-pin"} {...others} />);
}

export default Component;
