import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xw11znqtx.css';
import '../../css/w/wmpwcbcvx.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xw11znqtx"/><path class="wmpwcbcvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:marker-solid"} {...others} />);
}

export default Component;
