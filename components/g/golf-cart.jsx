import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fw6l7tbdq.css';
import '../../css/d/dzjiyss3b.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="fw6l7tbdq"/><path class="dzjiyss3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:golf-cart"} {...others} />);
}

export default Component;
