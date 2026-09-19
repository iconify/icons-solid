import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/j/jci0qhbcw.css';
import '../../css/a/ao7u0ztvf.css';
import '../../css/e/eo9hwabpc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="jci0qhbcw"/><path class="ao7u0ztvf"/><path class="eo9hwabpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:float"} {...others} />);
}

export default Component;
