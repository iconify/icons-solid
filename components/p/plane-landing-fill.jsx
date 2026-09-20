import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wg0fk4bty.css';
import '../../css/k/k2-apbbkm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wg0fk4bty"/><path class="k2-apbbkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:plane-landing-fill"} {...others} />);
}

export default Component;
