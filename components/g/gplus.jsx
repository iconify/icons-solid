import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b1rhy-6hn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="b1rhy-6hn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:gplus"} {...others} />);
}

export default Component;
