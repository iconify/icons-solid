import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/tv_dh211h.css';
import '../../css/c/cgh4wkbad.css';
import '../../css/h/hzic4hbnk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="tv_dh211h wm-shadow"/><path class="cgh4wkbad wm-shadow"/><path class="hzic4hbnk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:swords"} {...others} />);
}

export default Component;
