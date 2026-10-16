import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/engaw8bgi.css';
import '../../css/l/lsh_8pjho.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="engaw8bgi"/><path class="lsh_8pjho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pipeline-pig-48-bold"} {...others} />);
}

export default Component;
