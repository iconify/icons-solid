import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jqj5vw8cn.css';
import '../../css/d/dsg7quhrl.css';
import '../../css/g/g9cxag0yc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="jqj5vw8cn"/><path class="dsg7quhrl"/><path class="g9cxag0yc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:shopping-bag-hand-bag-2"} {...others} />);
}

export default Component;
