import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vlzvt6ued.css';
import '../../css/j/jic6wmbhr.css';
import '../../css/k/k9rd9w1rl.css';
import '../../css/m/mfth2hbch.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vlzvt6ued"/><path class="jic6wmbhr"/><path class="k9rd9w1rl"/><path class="mfth2hbch"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:gift-duotone"} {...others} />);
}

export default Component;
