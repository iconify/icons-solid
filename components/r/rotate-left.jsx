import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yf0f2gbhv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yf0f2gbhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icons8:rotate-left"} {...others} />);
}

export default Component;
