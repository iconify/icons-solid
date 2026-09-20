import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4qlwu49w.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="r4qlwu49w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:box-light-double-horizontal-light-up"} {...others} />);
}

export default Component;
