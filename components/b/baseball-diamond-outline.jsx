import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gow1o793z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gow1o793z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:baseball-diamond-outline"} {...others} />);
}

export default Component;
