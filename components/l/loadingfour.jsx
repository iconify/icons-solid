import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fcx4fbfjr.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="fcx4fbfjr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:loadingfour"} {...others} />);
}

export default Component;
