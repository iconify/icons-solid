import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8-xambrv.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="q8-xambrv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-outer-light-right-horizontal-stipple-down"} {...others} />);
}

export default Component;
