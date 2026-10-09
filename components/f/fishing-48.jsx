import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/id1bkk3ua.css';
import '../../css/g/g4zjvqbmi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="id1bkk3ua"/><path class="g4zjvqbmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fishing-48"} {...others} />);
}

export default Component;
