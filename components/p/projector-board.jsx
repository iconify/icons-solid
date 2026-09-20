import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zakoj8biy.css';
import '../../css/k/krdjcstrq.css';
import '../../css/m/mnbh4tbmu.css';
import '../../css/i/i3_hlh81p.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="zakoj8biy"/><path class="krdjcstrq"/><path class="mnbh4tbmu"/><path class="i3_hlh81p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:projector-board"} {...others} />);
}

export default Component;
