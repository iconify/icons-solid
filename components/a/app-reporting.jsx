import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yw___4blj.css';
import '../../css/j/je4ew4b4l.css';
import '../../css/z/zu7q_pbrq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="cuyn6tgcc"><path class="yw___4blj"/><path class="je4ew4b4l"/><path class="ouiIcon__fillSecondary zu7q_pbrq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-reporting"} {...others} />);
}

export default Component;
