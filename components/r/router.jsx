import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/plj97-bxh.css';
import '../../css/m/moc8vccjz.css';
import '../../css/p/p_4oxsb6e.css';
import '../../css/o/o-8l1okzb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="plj97-bxh"/><circle class="moc8vccjz"/><circle class="p_4oxsb6e"/><path class="o-8l1okzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:router"} {...others} />);
}

export default Component;
