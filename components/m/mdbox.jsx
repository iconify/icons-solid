import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w1xi8-b3g.css';
import '../../css/m/m4tlw7bnb.css';
import '../../css/z/zoevn-bkx.css';
import '../../css/y/yn9nnjbjj.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="w1xi8-b3g"/><path class="m4tlw7bnb"/><path class="zoevn-bkx"/><path class="yn9nnjbjj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"unjs:mdbox"} {...others} />);
}

export default Component;
