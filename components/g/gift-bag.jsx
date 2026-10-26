import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/o/ob40veb0y.css';
import '../../css/h/hjre30brw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="ob40veb0y"/><path class="hjre30brw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:gift-bag"} {...others} />);
}

export default Component;
