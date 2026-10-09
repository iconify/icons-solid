import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zldktgsnj.css';
import '../../css/o/o2cku2b2h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zldktgsnj"/><path class="o2cku2b2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:procurement-48"} {...others} />);
}

export default Component;
