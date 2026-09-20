import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tui_wvwks.css';
import '../../css/i/i7bd01w6t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tui_wvwks"/><path class="i7bd01w6t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:trophy"} {...others} />);
}

export default Component;
