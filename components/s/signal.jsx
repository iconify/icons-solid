import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/t/t4ya6qb4m.css';
import '../../css/z/zseipds2r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="t4ya6qb4m"/><path class="wm-deco zseipds2r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:signal"} {...others} />);
}

export default Component;
