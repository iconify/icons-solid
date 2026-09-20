import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2a3wkb1b.css';
import '../../css/w/wgit70b4c.css';
import '../../css/s/s1d1a8lrp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r2a3wkb1b"/><path class="wgit70b4c"/><path class="s1d1a8lrp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:lightbulb"} {...others} />);
}

export default Component;
