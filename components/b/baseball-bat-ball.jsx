import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gafb6ybya.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="gafb6ybya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:baseball-bat-ball"} {...others} />);
}

export default Component;
