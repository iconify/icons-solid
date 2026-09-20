import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/imnimkbei.css';
import '../../css/l/lmoac7bkv.css';
import '../../css/n/nk11j33qv.css';
import '../../css/t/tevzddchs.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="h01tyzbfu"><path class="imnimkbei"/><path class="lmoac7bkv"/><path class="nk11j33qv"/><path class="tevzddchs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:radio-selected-filled"} {...others} />);
}

export default Component;
