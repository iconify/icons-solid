import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jh5gb5v9g.css';
import '../../css/u/uo0uz19so.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jh5gb5v9g"/><path class="uo0uz19so"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pine-tree-48"} {...others} />);
}

export default Component;
