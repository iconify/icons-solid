import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/s/s-yz5mbon.css';
import '../../css/t/t8ld00bkb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="s-yz5mbon"/><path class="t8ld00bkb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:factory-plant"} {...others} />);
}

export default Component;
