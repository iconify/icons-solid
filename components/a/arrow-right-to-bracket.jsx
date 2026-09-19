import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gl7cqdg6z.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gl7cqdg6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:arrow-right-to-bracket"} {...others} />);
}

export default Component;
