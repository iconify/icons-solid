import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r97i27b3o.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="r97i27b3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:check-circle-o"} {...others} />);
}

export default Component;
