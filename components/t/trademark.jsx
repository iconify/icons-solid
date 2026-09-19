import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gm0ir7bgt.css';

const viewBox = {"width":1984,"height":1280};
const content = `<path class="gm0ir7bgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:trademark"} {...others} />);
}

export default Component;
