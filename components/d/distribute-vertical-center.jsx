import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv5kgg-ja.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="sv5kgg-ja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:distribute-vertical-center"} {...others} />);
}

export default Component;
