import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/okv6f5bis.css';
import '../../css/u/uq6a4ac5u.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="okv6f5bis"/><path class="uq6a4ac5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:receipt"} {...others} />);
}

export default Component;
