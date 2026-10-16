import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jbzwxtyqp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jbzwxtyqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plane-landing-48-bold"} {...others} />);
}

export default Component;
