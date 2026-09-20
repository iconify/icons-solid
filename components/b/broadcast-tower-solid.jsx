import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zpmv17cfo.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zpmv17cfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:broadcast-tower-solid"} {...others} />);
}

export default Component;
