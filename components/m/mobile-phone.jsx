import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umm606kxf.css';
import '../../css/j/j19nvizit.css';
import '../../css/j/jknnjjbpj.css';
import '../../css/i/i74mzvbky.css';

const viewBox = {"width":40,"height":40};
const content = `<g class="umm606kxf"><path class="j19nvizit"/><path class="jknnjjbpj"/><path class="i74mzvbky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-stickies-color:mobile-phone"} {...others} />);
}

export default Component;
