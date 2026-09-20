import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/o/o98ku-yjh.css';
import '../../css/r/rnlcy3bsa.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="o98ku-yjh"/><path class="rnlcy3bsa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:login-1"} {...others} />);
}

export default Component;
