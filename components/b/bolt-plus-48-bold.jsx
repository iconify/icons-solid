import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j4crdmbww.css';
import '../../css/h/hwjgqrbah.css';
import '../../css/y/yr1454spc.css';
import '../../css/f/fdlxrep5d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j4crdmbww"/><path class="hwjgqrbah"/><path class="yr1454spc"/><path class="fdlxrep5d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bolt-plus-48-bold"} {...others} />);
}

export default Component;
