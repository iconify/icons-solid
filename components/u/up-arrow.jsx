import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/go63bd4jt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="go63bd4jt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:up-arrow"} {...others} />);
}

export default Component;
