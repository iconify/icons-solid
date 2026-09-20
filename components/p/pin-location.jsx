import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbk83jwqy.css';
import '../../css/c/cbhrk9bqa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fbk83jwqy"/><path class="cbhrk9bqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:pin-location"} {...others} />);
}

export default Component;
