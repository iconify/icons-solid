import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/szn9f3b9w.css';
import '../../css/a/axzoto0sm.css';
import '../../css/j/jnctvnbwd.css';
import '../../css/r/rptojzb5f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="szn9f3b9w"/><path class="axzoto0sm"/><path class="jnctvnbwd"/><path class="rptojzb5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:sunrise"} {...others} />);
}

export default Component;
