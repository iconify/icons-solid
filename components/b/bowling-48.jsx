import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ut-z-5uyn.css';
import '../../css/f/fh5ya8rmw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ut-z-5uyn"/><path class="fh5ya8rmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bowling-48"} {...others} />);
}

export default Component;
