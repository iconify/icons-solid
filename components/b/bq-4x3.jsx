import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xg5u4cbcz.css';
import '../../css/i/ictwwwp8x.css';
import '../../css/l/lc3doybli.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="xg5u4cbcz"/><path class="ictwwwp8x"/><path class="lc3doybli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:bq-4x3"} {...others} />);
}

export default Component;
