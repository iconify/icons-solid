import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wq5gymbff.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wq5gymbff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:database-off-outline"} {...others} />);
}

export default Component;
