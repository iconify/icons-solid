import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w5ultbcim.css';
import '../../css/c/cpvfcjbza.css';
import '../../css/j/jy3omdbnr.css';
import '../../css/h/hq2cko65l.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="w5ultbcim"/><path class="cpvfcjbza"/><path class="jy3omdbnr"/><path class="hq2cko65l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:saint-lucia"} {...others} />);
}

export default Component;
