import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a-q4zlgza.css';
import '../../css/g/g6-ekr0nj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="a-q4zlgza"/><path class="g6-ekr0nj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:conveyor-48"} {...others} />);
}

export default Component;
