import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d4bvf14zw.css';
import '../../css/y/y2hjzlb3l.css';
import '../../css/h/h7ej-dbml.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="d4bvf14zw"/><path class="y2hjzlb3l"/><path class="h7ej-dbml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:hammer"} {...others} />);
}

export default Component;
