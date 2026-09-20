import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bbhxhhbkn.css';
import '../../css/n/n6wlngbth.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bbhxhhbkn"/><path class="n6wlngbth"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:glasses"} {...others} />);
}

export default Component;
