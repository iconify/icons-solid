import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmh5xkboo.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="rmh5xkboo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-outer-light-left-horizontal-stipple"} {...others} />);
}

export default Component;
