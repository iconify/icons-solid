import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hf8qgfbqp.css';
import '../../css/w/w77re0b_b.css';
import '../../css/i/idneaybyo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hf8qgfbqp"/><path class="w77re0b_b"/><path class="idneaybyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:emissions-up-48"} {...others} />);
}

export default Component;
