import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rz5b27bcw.css';
import '../../css/g/g205xvbso.css';
import '../../css/m/mqgqm8b7z.css';
import '../../css/n/ncstxp-xu.css';

const viewBox = {"width":2400,"height":2800};
const content = `<path class="rz5b27bcw"/><g class="g205xvbso"><path class="mqgqm8b7z"/><path class="ncstxp-xu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:twitch"} {...others} />);
}

export default Component;
