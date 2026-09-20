import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bcje72bbx.css';
import '../../css/q/qm8irt2ma.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bcje72bbx"/><path class="qm8irt2ma"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:record-two-tone"} {...others} />);
}

export default Component;
