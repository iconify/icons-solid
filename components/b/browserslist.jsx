import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tz7dlcc-l.css';
import '../../css/a/ah8b_-xeq.css';
import '../../css/r/rqh9r0b_f.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="tz7dlcc-l"><path class="ah8b_-xeq"/><path class="rqh9r0b_f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:browserslist"} {...others} />);
}

export default Component;
