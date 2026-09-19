import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/c/cdi-fjugt.css';
import '../../css/y/yyx_3z7mv.css';
import '../../css/c/c6nrszujt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="cdi-fjugt"/><path clip-rule="evenodd" class="yyx_3z7mv"/><path class="c6nrszujt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:open-door"} {...others} />);
}

export default Component;
