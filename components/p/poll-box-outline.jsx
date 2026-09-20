import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pg8zitz7z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pg8zitz7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:poll-box-outline"} {...others} />);
}

export default Component;
