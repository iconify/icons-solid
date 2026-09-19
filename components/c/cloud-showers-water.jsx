import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9ab8rbfo.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="c9ab8rbfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-solid:cloud-showers-water"} {...others} />);
}

export default Component;
