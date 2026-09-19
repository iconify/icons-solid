import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x8qnxxb3b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x8qnxxb3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-border-left"} {...others} />);
}

export default Component;
