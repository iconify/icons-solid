import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngyvv5bhk.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="ngyvv5bhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:battery-0"} {...others} />);
}

export default Component;
