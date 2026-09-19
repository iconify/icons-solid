import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/welyr_3mp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="welyr_3mp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:navidrome"} {...others} />);
}

export default Component;
