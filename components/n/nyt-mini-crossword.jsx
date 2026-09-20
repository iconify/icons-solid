import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umjb_uhmw.css';
import '../../css/t/t6ojfgbzo.css';
import '../../css/o/o8-7gvb1d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="umjb_uhmw"/><path class="t6ojfgbzo"/><path class="o8-7gvb1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nyt-mini-crossword"} {...others} />);
}

export default Component;
