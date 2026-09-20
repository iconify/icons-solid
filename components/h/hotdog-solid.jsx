import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/myp90-ogc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="myp90-ogc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:hotdog-solid"} {...others} />);
}

export default Component;
