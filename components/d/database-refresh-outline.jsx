import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y862j7ftr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y862j7ftr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:database-refresh-outline"} {...others} />);
}

export default Component;
