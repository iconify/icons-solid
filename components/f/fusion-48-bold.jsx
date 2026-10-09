import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-x5_513g.css';
import '../../css/c/c4km1paud.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j-x5_513g"/><path class="c4km1paud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fusion-48-bold"} {...others} />);
}

export default Component;
