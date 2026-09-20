import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wav0n5hso.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wav0n5hso"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:rss-line"} {...others} />);
}

export default Component;
