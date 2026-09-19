import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlgkpox4q.css';

const viewBox = {"width":1025,"height":896};
const content = `<path class="vlgkpox4q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:keyboard"} {...others} />);
}

export default Component;
