import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-0ql8beu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="o-0ql8beu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:connectdevelop"} {...others} />);
}

export default Component;
