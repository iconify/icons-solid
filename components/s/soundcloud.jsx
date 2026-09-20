import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ptr56cnqe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ptr56cnqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:soundcloud"} {...others} />);
}

export default Component;
