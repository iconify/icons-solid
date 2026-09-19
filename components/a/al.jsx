import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ycmz1urwb.css';
import '../../css/o/oi9gvkbqh.css';

const viewBox = {"width":300,"height":216};
const content = `<g class="ft5dv1b6b"><path class="ycmz1urwb"/><path class="oi9gvkbqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:al"} {...others} />);
}

export default Component;
