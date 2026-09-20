import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jd7pgj9zi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jd7pgj9zi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:stream"} {...others} />);
}

export default Component;
