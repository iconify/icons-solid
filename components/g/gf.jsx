import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hcoc46qez.css';
import '../../css/i/ijcdvubgt.css';
import '../../css/x/x9okyob9o.css';

const viewBox = {"width":32,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="hcoc46qez"/><path clip-rule="evenodd" class="ijcdvubgt"/><path clip-rule="evenodd" class="x9okyob9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flagpack:gf"} {...others} />);
}

export default Component;
