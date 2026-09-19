import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ls6_xn_4i.css';
import '../../css/v/v8h4yw1tz.css';
import '../../css/f/fvkeyncuk.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ls6_xn_4i"><path class="v8h4yw1tz"/><path class="fvkeyncuk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:next"} {...others} />);
}

export default Component;
