import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k17m1b2dt.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="k17m1b2dt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:apple-alt"} {...others} />);
}

export default Component;
