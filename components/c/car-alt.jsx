import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_ri79bak.css';
import '../../css/s/sl-mdjb1v.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="w_ri79bak"/><path class="sl-mdjb1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:car-alt"} {...others} />);
}

export default Component;
