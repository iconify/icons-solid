import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm3ivccum.css';
import '../../css/h/h9_05fbcs.css';
import '../../css/g/glxmc61cx.css';
import '../../css/o/oyq6rjbox.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="vm3ivccum"><circle class="h9_05fbcs"/><path class="glxmc61cx"/><path class="oyq6rjbox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:baby-one"} {...others} />);
}

export default Component;
