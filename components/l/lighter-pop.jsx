import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qg47f8bmh.css';
import '../../css/h/h1cjk03ry.css';
import '../../css/c/cei2znwlq.css';
import '../../css/s/sknc2vydc.css';
import '../../css/e/ealapdb6p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="qg47f8bmh"/><path class="h1cjk03ry"/><path class="cei2znwlq"/><path class="sknc2vydc"/><path class="ealapdb6p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:lighter-pop"} {...others} />);
}

export default Component;
