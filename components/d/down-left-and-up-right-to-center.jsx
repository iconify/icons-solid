import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8tk3xbbv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x8tk3xbbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:down-left-and-up-right-to-center"} {...others} />);
}

export default Component;
