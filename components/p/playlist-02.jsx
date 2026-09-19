import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u9-4m7han.css';
import '../../css/i/i54-r6grq.css';
import '../../css/z/z5ni2fbvl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="u9-4m7han"/><path class="i54-r6grq"/><path class="z5ni2fbvl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:playlist-02"} {...others} />);
}

export default Component;
