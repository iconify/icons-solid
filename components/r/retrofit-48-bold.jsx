import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uxvnz_b5x.css';
import '../../css/x/x1l7c_xru.css';
import '../../css/m/m9o881-gj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uxvnz_b5x"/><path class="x1l7c_xru"/><path class="m9o881-gj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:retrofit-48-bold"} {...others} />);
}

export default Component;
