import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/am1po-b2u.css';

const viewBox = {"width":24,"height":24,"left":0.1,"top":0.1};
const content = `<path class="am1po-b2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:droplet-fill"} {...others} />);
}

export default Component;
