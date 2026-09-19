import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-681ibkf.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="m-681ibkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:plane-circle-exclamation"} {...others} />);
}

export default Component;
