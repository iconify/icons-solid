import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ox2dgjb2m.css';

const viewBox = {"width":576,"height":512};
const content = `<path class="ox2dgjb2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:exclamation-triangle"} {...others} />);
}

export default Component;
