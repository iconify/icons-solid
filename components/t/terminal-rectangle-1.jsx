import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eoeuvhbqx.css';
import '../../css/h/hba-f03ki.css';
import '../../css/e/e7_absz6o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="eoeuvhbqx"/><path class="hba-f03ki"/><path class="e7_absz6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:terminal-rectangle-1"} {...others} />);
}

export default Component;
