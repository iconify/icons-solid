import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y73fl8hsz.css';
import '../../css/f/f21qp2hxp.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="y73fl8hsz"/><path class="f21qp2hxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:slim"} {...others} />);
}

export default Component;
