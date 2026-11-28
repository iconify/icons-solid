import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tn07yfl-o.css';
import '../../css/f/fmgs8jbtv.css';
import '../../css/n/npaxttsgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="tn07yfl-o"/><path class="fmgs8jbtv"/><path class="npaxttsgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:rainbow-duo"} {...others} />);
}

export default Component;
