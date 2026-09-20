import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdom31c5r.css';
import '../../css/w/wp43u2bcy.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="fdom31c5r"/><path class="wp43u2bcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:harddrive"} {...others} />);
}

export default Component;
