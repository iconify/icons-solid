import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tduyn620x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="tduyn620x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:exercise-yoga"} {...others} />);
}

export default Component;
