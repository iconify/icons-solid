import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b8dx0dv6f.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="b8dx0dv6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:analog-tv-with-rabbitears"} {...others} />);
}

export default Component;
