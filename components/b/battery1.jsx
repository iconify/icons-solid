import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvhx7ob_d.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="vvhx7ob_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:battery1"} {...others} />);
}

export default Component;
