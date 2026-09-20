import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmo9ppb1i.css';
import '../../css/d/die78ntcw.css';
import '../../css/d/d19l9rbzt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="lmo9ppb1i"><path class="die78ntcw"/><path class="d19l9rbzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:wikipedia-logo"} {...others} />);
}

export default Component;
