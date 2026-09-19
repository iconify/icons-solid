import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ad80vl__v.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="ad80vl__v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:wine-glass-empty"} {...others} />);
}

export default Component;
