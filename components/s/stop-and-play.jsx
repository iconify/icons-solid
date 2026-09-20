import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/k/k0skn-9gi.css';
import '../../css/k/kv5hm5h9l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><path class="k0skn-9gi"/><path class="kv5hm5h9l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:stop-and-play"} {...others} />);
}

export default Component;
