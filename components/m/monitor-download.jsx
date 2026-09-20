import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bozyds5yg.css';
import '../../css/u/um-klob-b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bozyds5yg"/><path class="um-klob-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:monitor-download"} {...others} />);
}

export default Component;
