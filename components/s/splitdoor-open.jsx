import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yee79pbuj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yee79pbuj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:splitdoor-open"} {...others} />);
}

export default Component;
