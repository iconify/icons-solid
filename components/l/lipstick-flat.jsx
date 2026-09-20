import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a5wwwq5kc.css';
import '../../css/s/s0uiriogt.css';
import '../../css/f/fstrm2tym.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="a5wwwq5kc"/><path clip-rule="evenodd" class="s0uiriogt"/><path clip-rule="evenodd" class="fstrm2tym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:lipstick-flat"} {...others} />);
}

export default Component;
