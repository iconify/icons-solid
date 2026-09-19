import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/c/c4_sqjnxx.css';
import '../../css/d/dnd8lxf7x.css';
import '../../css/l/lmc9n2f1p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><circle class="c4_sqjnxx"/><path class="dnd8lxf7x"/><path class="lmc9n2f1p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:classroom"} {...others} />);
}

export default Component;
