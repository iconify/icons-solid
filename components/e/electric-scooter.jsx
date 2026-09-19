import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/am-5-p8-s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="am-5-p8-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:electric-scooter"} {...others} />);
}

export default Component;
