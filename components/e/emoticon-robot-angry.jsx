import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tk9z7dtrm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tk9z7dtrm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:emoticon-robot-angry"} {...others} />);
}

export default Component;
