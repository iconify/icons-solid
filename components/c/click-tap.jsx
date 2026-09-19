import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/d/d8zydsb_d.css';
import '../../css/k/klxy3db1q.css';
import '../../css/n/ndzj4xqgh.css';
import '../../css/m/mnj31bc4i.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="d8zydsb_d"/><path class="klxy3db1q"/><path class="ndzj4xqgh"/><path class="mnj31bc4i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:click-tap"} {...others} />);
}

export default Component;
