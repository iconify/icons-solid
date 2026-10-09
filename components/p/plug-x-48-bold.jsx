import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j174--bix.css';
import '../../css/y/y9e_r21yc.css';
import '../../css/f/fd0w32b9p.css';
import '../../css/o/oqrsy3bng.css';
import '../../css/b/bqy7-kv9k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j174--bix"/><path class="y9e_r21yc"/><path class="fd0w32b9p"/><path class="oqrsy3bng"/><path class="bqy7-kv9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:plug-x-48-bold"} {...others} />);
}

export default Component;
