import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pewqf9b0b.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="pewqf9b0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-light-horizontal-down-stipple-down"} {...others} />);
}

export default Component;
