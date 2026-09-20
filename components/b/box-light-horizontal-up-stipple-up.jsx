import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dad9_nbwf.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="dad9_nbwf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-light-horizontal-up-stipple-up"} {...others} />);
}

export default Component;
