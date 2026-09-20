import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/banr10v6c.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="banr10v6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:eye-closed-outline"} {...others} />);
}

export default Component;
