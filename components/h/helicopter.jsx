import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5ws6he8x.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="x5ws6he8x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:helicopter"} {...others} />);
}

export default Component;
