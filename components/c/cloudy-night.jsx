import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r4zl9wnja.css';
import '../../css/l/lqngvhr0v.css';
import '../../css/r/rj1kqxlid.css';
import '../../css/h/hbr7rrboq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r4zl9wnja"/><path class="lqngvhr0v"/><path class="rj1kqxlid"/><path class="hbr7rrboq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:cloudy-night"} {...others} />);
}

export default Component;
