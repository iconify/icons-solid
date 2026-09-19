import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kvilx1q3c.css';
import '../../css/l/l0dq_6b7r.css';
import '../../css/v/v74u4eb-d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="kvilx1q3c"><path class="l0dq_6b7r"/><path class="v74u4eb-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:tuchong"} {...others} />);
}

export default Component;
