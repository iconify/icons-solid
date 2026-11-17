import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/a6mwx9v_d.css';
import '../../css/z/z8w34vkig.css';
import '../../css/j/j7356ltxg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><circle class="a6mwx9v_d"/><path class="z8w34vkig"/><path class="j7356ltxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:sad"} {...others} />);
}

export default Component;
