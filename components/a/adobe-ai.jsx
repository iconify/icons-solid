import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qaiyq5bvp.css';
import '../../css/p/pa98axbvh.css';
import '../../css/n/ngm4r3bsj.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="qaiyq5bvp"><path class="pa98axbvh"/><path class="ngm4r3bsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:adobe-ai"} {...others} />);
}

export default Component;
