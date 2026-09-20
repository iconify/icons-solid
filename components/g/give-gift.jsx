import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/n/neav67bxp.css';
import '../../css/p/p997oqn2n.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="neav67bxp"/><path class="p997oqn2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:give-gift"} {...others} />);
}

export default Component;
