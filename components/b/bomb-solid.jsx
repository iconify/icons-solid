import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1m0s1bcj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="o1m0s1bcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:bomb-solid"} {...others} />);
}

export default Component;
