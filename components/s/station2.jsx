import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qivn4qj0i.css';
import '../../css/b/bfl8_9b4q.css';
import '../../css/b/bs-7kpflq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="qivn4qj0i"/><path class="bfl8_9b4q"/><path clip-rule="evenodd" class="bs-7kpflq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:station2"} {...others} />);
}

export default Component;
