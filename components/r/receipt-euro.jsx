import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dy_8-wb5v.css';
import '../../css/l/lm1kuob-z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dy_8-wb5v"/><path class="lm1kuob-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:receipt-euro"} {...others} />);
}

export default Component;
