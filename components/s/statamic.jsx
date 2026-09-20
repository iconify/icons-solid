import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2686umpn.css';
import '../../css/v/v4ezc_mia.css';
import '../../css/y/ycs9ylboy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r2686umpn"/><path class="v4ezc_mia"/><path class="ycs9ylboy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:statamic"} {...others} />);
}

export default Component;
