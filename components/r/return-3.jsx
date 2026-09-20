import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/j/j27vatbwg.css';
import '../../css/f/f2ic6dbyk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="j27vatbwg"/><path class="f2ic6dbyk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:return-3"} {...others} />);
}

export default Component;
