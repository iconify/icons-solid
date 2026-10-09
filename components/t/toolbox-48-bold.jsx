import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7rorjg8o.css';
import '../../css/d/d_o7tid8q.css';
import '../../css/z/zcmx7np5h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y7rorjg8o"/><path class="d_o7tid8q"/><path class="zcmx7np5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:toolbox-48-bold"} {...others} />);
}

export default Component;
