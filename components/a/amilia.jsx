import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2ir0dbbf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="j2ir0dbbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:amilia"} {...others} />);
}

export default Component;
