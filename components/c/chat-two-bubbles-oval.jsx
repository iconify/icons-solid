import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/c/cf26ob75g.css';
import '../../css/o/o1jzz37hz.css';
import '../../css/g/g0byy1r_s.css';
import '../../css/i/ik90ebisb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="cf26ob75g"/><path class="o1jzz37hz"/><path class="g0byy1r_s"/><path class="ik90ebisb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:chat-two-bubbles-oval"} {...others} />);
}

export default Component;
