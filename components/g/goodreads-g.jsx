import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/py_4ud_kr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="py_4ud_kr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:goodreads-g"} {...others} />);
}

export default Component;
