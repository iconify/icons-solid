import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dp6r5wbyh.css';
import '../../css/t/t6f_l4ajh.css';
import '../../css/b/byt1gqb4y.css';
import '../../css/p/p94ue57rj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="dp6r5wbyh"/><path class="t6f_l4ajh"/><path class="byt1gqb4y"/><path class="p94ue57rj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:e-motorcycle-48"} {...others} />);
}

export default Component;
