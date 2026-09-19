import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/o/o0dwf0b9x.css';
import '../../css/q/qws4jdbvi.css';
import '../../css/p/p19h3jw5g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="o0dwf0b9x"/><path class="qws4jdbvi"/><path class="p19h3jw5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:signal-tower-one"} {...others} />);
}

export default Component;
