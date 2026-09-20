import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kdlr88zwz.css';
import '../../css/y/yw4531c1f.css';
import '../../css/p/py5qyfban.css';
import '../../css/p/ppy4v5tko.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kdlr88zwz"/><path class="yw4531c1f"/><path class="py5qyfban"/><path class="ppy4v5tko"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:task"} {...others} />);
}

export default Component;
