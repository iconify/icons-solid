import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/grw1hlb_v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="grw1hlb_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:bicycle-basket"} {...others} />);
}

export default Component;
