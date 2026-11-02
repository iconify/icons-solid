import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/q/q9blcg3kq.css';
import '../../css/k/km29vob4w.css';
import '../../css/e/eoev49tcu.css';
import '../../css/k/k8-v8tc6d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="q9blcg3kq"/><path class="km29vob4w"/><path class="eoev49tcu"/><path class="k8-v8tc6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:user-x"} {...others} />);
}

export default Component;
