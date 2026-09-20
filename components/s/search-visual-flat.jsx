import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ofa0zriwx.css';
import '../../css/c/c866szb7c.css';
import '../../css/x/x-cdxwb4q.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ofa0zriwx"/><path clip-rule="evenodd" class="c866szb7c"/><path clip-rule="evenodd" class="x-cdxwb4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:search-visual-flat"} {...others} />);
}

export default Component;
