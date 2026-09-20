import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_64wx3zl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s_64wx3zl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:twitter-circle"} {...others} />);
}

export default Component;
