import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/du2061ziy.css';
import '../../css/o/ozqz5s-cs.css';
import '../../css/r/rwfsknbjx.css';
import '../../css/d/d5vmwq5nj.css';

const viewBox = {"width":1452,"height":1811};
const content = `<g class="du2061ziy"><path class="ozqz5s-cs"/><path class="rwfsknbjx"/><path class="d5vmwq5nj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:intello-light"} {...others} />);
}

export default Component;
