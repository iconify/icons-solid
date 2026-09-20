import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zil8_rj-u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zil8_rj-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:kitchen"} {...others} />);
}

export default Component;
