import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nyt-wmt3x.css';
import '../../css/p/pmnep-p9l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nyt-wmt3x"/><path class="pmnep-p9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:authportal"} {...others} />);
}

export default Component;
