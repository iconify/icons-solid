import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z662ojbzr.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="z662ojbzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:distribute-horizontal-48"} {...others} />);
}

export default Component;
