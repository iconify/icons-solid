import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wtr2jecan.css';
import '../../css/y/yt81ngblg.css';
import '../../css/f/fkatt9b7g.css';

const viewBox = {"width":16,"height":14};
const content = `<path class="wtr2jecan"/><path class="yt81ngblg"/><path class="fkatt9b7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:downloadcloud"} {...others} />);
}

export default Component;
