import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tx9z7-b2w.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tx9z7-b2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:pen-alt"} {...others} />);
}

export default Component;
