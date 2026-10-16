import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fcazebc-h.css';
import '../../css/r/r09w33bfe.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fcazebc-h"/><path class="r09w33bfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:chain-48-bold"} {...others} />);
}

export default Component;
