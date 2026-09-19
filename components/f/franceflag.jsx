import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y3ep-0b7w.css';
import '../../css/r/rcci-d4wx.css';
import '../../css/b/b197rfn0j.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y3ep-0b7w"/><path class="rcci-d4wx"/><path class="b197rfn0j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:franceflag"} {...others} />);
}

export default Component;
