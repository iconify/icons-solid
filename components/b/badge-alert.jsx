import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xgaf0nbdt.css';
import '../../css/c/c5yb8bdcb.css';
import '../../css/p/pcr6xabis.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xgaf0nbdt"/><path class="c5yb8bdcb"/><path class="pcr6xabis"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:badge-alert"} {...others} />);
}

export default Component;
