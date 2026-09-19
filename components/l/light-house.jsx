import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/k/kw7_76byl.css';
import '../../css/d/di-0r9bjt.css';
import '../../css/e/enty5jbik.css';
import '../../css/o/owajxdbfo.css';
import '../../css/d/dkfjrabff.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="kw7_76byl"/><path class="di-0r9bjt"/><path class="enty5jbik"/><path class="owajxdbfo"/><path class="dkfjrabff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:light-house"} {...others} />);
}

export default Component;
