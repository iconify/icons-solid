import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oiwn7b8vb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="oiwn7b8vb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:distribute-vertical-top"} {...others} />);
}

export default Component;
