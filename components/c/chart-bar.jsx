import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c28q9nbmh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c28q9nbmh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:chart-bar"} {...others} />);
}

export default Component;
