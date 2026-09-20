import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kn_ek_m6q.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="kn_ek_m6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:campsite-and-droplet"} {...others} />);
}

export default Component;
