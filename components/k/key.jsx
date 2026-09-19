import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ls6_xn_4i.css';
import '../../css/q/qu341zbrs.css';
import '../../css/o/o8ni1dbhe.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ls6_xn_4i"><path class="qu341zbrs"/><path class="o8ni1dbhe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:key"} {...others} />);
}

export default Component;
