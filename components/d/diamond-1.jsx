import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/d/d11qadc1n.css';
import '../../css/g/gi7mpdn6r.css';
import '../../css/q/q5of8sbys.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="d11qadc1n"/><path class="gi7mpdn6r"/><path class="q5of8sbys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:diamond-1"} {...others} />);
}

export default Component;
