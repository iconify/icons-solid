import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mf6_e5b9b.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mf6_e5b9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:carousel-horizontal"} {...others} />);
}

export default Component;
