import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v0awb8bkd.css';
import '../../css/e/ejcigpbak.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v0awb8bkd"/><path class="ejcigpbak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:engagement-light"} {...others} />);
}

export default Component;
