import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kt0_y9e1e.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kt0_y9e1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bytesize:chevron-top"} {...others} />);
}

export default Component;
