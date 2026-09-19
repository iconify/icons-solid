import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ob7-etbks.css';
import '../../css/l/lx05izb3h.css';
import '../../css/q/qiz78oq5b.css';
import '../../css/t/ts2zb-_sl.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><circle class="ob7-etbks"/><path class="lx05izb3h"/><path clip-rule="evenodd" class="qiz78oq5b"/><circle class="ts2zb-_sl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:exclamation-circle-print"} {...others} />);
}

export default Component;
