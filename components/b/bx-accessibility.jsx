import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5257yb9v.css';
import '../../css/w/wgc4b7bwl.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="j5257yb9v"/><path class="wgc4b7bwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-accessibility"} {...others} />);
}

export default Component;
