import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lews4bcdz.css';
import '../../css/r/rwgs81nbw.css';
import '../../css/o/ogdz0h5td.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lews4bcdz"/><path class="rwgs81nbw"/><path class="ogdz0h5td"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-sheets"} {...others} />);
}

export default Component;
