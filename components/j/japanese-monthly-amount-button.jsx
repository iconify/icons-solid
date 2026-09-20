import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/way5rg2jx.css';
import '../../css/s/sxsjrzbyv.css';
import '../../css/q/qq05izhzw.css';
import '../../css/v/v46awac6b.css';
import '../../css/b/byabkegeg.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="way5rg2jx"/><g class="sxsjrzbyv"><path clip-rule="evenodd" class="qq05izhzw"/><path clip-rule="evenodd" class="v46awac6b"/><path class="byabkegeg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:japanese-monthly-amount-button"} {...others} />);
}

export default Component;
