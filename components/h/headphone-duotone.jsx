import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kn98ytb9h.css';
import '../../css/q/qudzvcbhp.css';
import '../../css/k/kfczycb2v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kn98ytb9h"/><path class="qudzvcbhp"/><path class="kfczycb2v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:headphone-duotone"} {...others} />);
}

export default Component;
