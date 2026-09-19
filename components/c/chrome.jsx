import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dj3mtbc7u.css';

const viewBox = {"width":717,"height":717};
const content = `<path class="dj3mtbc7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:chrome"} {...others} />);
}

export default Component;
