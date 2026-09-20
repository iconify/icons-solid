import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h_tbx5-0y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h_tbx5-0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:twitter-box"} {...others} />);
}

export default Component;
