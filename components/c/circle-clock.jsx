import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/b/b1r711bgn.css';
import '../../css/u/uh8psccjy.css';
import '../../css/f/ft8nxxddd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="b1r711bgn"/><path class="uh8psccjy"/><path class="ft8nxxddd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:circle-clock"} {...others} />);
}

export default Component;
