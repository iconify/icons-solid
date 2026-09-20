import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8sjn35rg.css';
import '../../css/x/xs8efbche.css';
import '../../css/l/ln-ed7fbk.css';
import '../../css/f/fw87vybqy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="r8sjn35rg"/><path class="xs8efbche"/><path class="ln-ed7fbk"/><path class="fw87vybqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:video-edit-cc-titles"} {...others} />);
}

export default Component;
