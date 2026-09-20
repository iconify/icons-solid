import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/heii3gp1f.css';
import '../../css/a/anz4_acpt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="heii3gp1f"/><path class="anz4_acpt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:award-line"} {...others} />);
}

export default Component;
