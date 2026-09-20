import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s6kvmhbwz.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-2};
const content = `<path class="s6kvmhbwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:foursquare"} {...others} />);
}

export default Component;
