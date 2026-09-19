import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l-mit6byn.css';
import '../../css/c/cro928b5q.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="l-mit6byn"/><path class="cro928b5q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:inventory-management"} {...others} />);
}

export default Component;
