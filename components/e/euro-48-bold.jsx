import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/idgsyubvx.css';
import '../../css/j/j1dq0oxyt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="idgsyubvx"/><path class="j1dq0oxyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:euro-48-bold"} {...others} />);
}

export default Component;
