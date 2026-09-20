import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/q/qoog56bkt.css';
import '../../css/r/rijeli0gx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to0c2ub7t"><rect class="qoog56bkt"/><path class="rijeli0gx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:gift-alt"} {...others} />);
}

export default Component;
