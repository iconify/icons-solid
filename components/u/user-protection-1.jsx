import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/c/cokktv9sg.css';
import '../../css/x/x_dtjmbrt.css';
import '../../css/q/q_gh9i-vp.css';
import '../../css/k/k7ufncbme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="cokktv9sg"/><path class="x_dtjmbrt"/><path class="q_gh9i-vp"/><path class="k7ufncbme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:user-protection-1"} {...others} />);
}

export default Component;
