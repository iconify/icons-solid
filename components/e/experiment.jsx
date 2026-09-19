import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/a/ayeqpac6o.css';
import '../../css/q/q4c5ixzyh.css';
import '../../css/g/ga6drvbwg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="ayeqpac6o"/><path class="q4c5ixzyh"/><path class="ga6drvbwg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:experiment"} {...others} />);
}

export default Component;
