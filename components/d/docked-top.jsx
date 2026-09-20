import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wm5wywbws.css';
import '../../css/v/v6mgv7b7g.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="wm5wywbws"/><path class="v6mgv7b7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:docked-top"} {...others} />);
}

export default Component;
