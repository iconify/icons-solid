import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oj_1-1b-d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="oj_1-1b-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sun-dim-48-bold"} {...others} />);
}

export default Component;
