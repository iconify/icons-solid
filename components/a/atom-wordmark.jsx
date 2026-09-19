import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y6pslhx0v.css';
import '../../css/g/gboct0b5i.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="y6pslhx0v"/><path clip-rule="evenodd" class="gboct0b5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:atom-wordmark"} {...others} />);
}

export default Component;
