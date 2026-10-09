import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvvgk1bmy.css';
import '../../css/i/i0j09mbzd.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wvvgk1bmy"/><path class="i0j09mbzd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sticky-note-48-bold"} {...others} />);
}

export default Component;
