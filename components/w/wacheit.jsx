import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x6v55xb4m.css';
import '../../css/h/h3e8qmb6x.css';
import '../../css/m/mpmb-4bnd.css';

const viewBox = {"width":21,"height":21,"left":1.5,"top":1.5};
const content = `<path class="x6v55xb4m"/><circle class="h3e8qmb6x"/><path class="mpmb-4bnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:wacheit"} {...others} />);
}

export default Component;
