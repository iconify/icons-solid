import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bg-0uvb6x.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="bg-0uvb6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-outer-light-left-horizontal-stipple-down"} {...others} />);
}

export default Component;
