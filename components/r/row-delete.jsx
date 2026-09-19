import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r0119acpd.css';
import '../../css/c/cj-ip0b4q.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="r0119acpd"/><path class="cj-ip0b4q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:row-delete"} {...others} />);
}

export default Component;
