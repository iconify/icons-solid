import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7fmnlb4r.css';
import '../../css/w/ws63a0bby.css';
import '../../css/s/stdaf0bdx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="j7fmnlb4r"><path class="ws63a0bby"/><path class="stdaf0bdx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:package-dimension"} {...others} />);
}

export default Component;
