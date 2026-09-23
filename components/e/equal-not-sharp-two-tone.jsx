import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6fqnxbse.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f6fqnxbse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:equal-not-sharp-two-tone"} {...others} />);
}

export default Component;
