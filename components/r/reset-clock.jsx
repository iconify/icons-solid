import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/r/r0dk64b4i.css';
import '../../css/a/aoikfqb5a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="r0dk64b4i"/><path class="aoikfqb5a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:reset-clock"} {...others} />);
}

export default Component;
