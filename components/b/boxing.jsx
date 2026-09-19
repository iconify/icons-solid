import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/d/du_1q6b0d.css';
import '../../css/d/dxbqeo6es.css';
import '../../css/l/lq78wnbxw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><path class="du_1q6b0d"/><path class="dxbqeo6es"/><path class="lq78wnbxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:boxing"} {...others} />);
}

export default Component;
