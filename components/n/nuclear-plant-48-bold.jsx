import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yo3rjpgxd.css';
import '../../css/d/dujsdbckk.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="yo3rjpgxd"/><path class="dujsdbckk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:nuclear-plant-48-bold"} {...others} />);
}

export default Component;
