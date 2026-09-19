import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a451r_95b.css';
import '../../css/v/v3chfnb_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="a451r_95b"/><path class="v3chfnb_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:steak"} {...others} />);
}

export default Component;
