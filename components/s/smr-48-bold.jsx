import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y79i0r8qi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y79i0r8qi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:smr-48-bold"} {...others} />);
}

export default Component;
