import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ybuk2yvcd.css';
import '../../css/m/m9lolpbrw.css';
import '../../css/q/qdyu2hbul.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ybuk2yvcd"/><path class="m9lolpbrw"/><path class="qdyu2hbul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-defender-light"} {...others} />);
}

export default Component;
