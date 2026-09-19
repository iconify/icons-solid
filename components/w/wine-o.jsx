import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yccvg5xel.css';

const viewBox = {"width":1120,"height":2208};
const content = `<path class="yccvg5xel"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:wine-o"} {...others} />);
}

export default Component;
