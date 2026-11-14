import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/le9v28bsd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="le9v28bsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:briefcase-conveyor-belt"} {...others} />);
}

export default Component;
