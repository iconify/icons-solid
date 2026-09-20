import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n168ynqcy.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="n168ynqcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:bookmark-1-remix"} {...others} />);
}

export default Component;
