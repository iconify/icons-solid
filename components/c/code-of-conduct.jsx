import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gej5qbeik.css';
import '../../css/o/oaf-ekb5m.css';
import '../../css/q/qawp00bnx.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="gej5qbeik"><path class="oaf-ekb5m"/><path class="qawp00bnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:code-of-conduct"} {...others} />);
}

export default Component;
