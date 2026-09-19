import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qs9xiaclo.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qs9xiaclo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:partly-cloudy-night"} {...others} />);
}

export default Component;
