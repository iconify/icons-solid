import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/chz62cc3y.css';
import '../../css/m/mxksfsbhx.css';
import '../../css/l/lg4yc5rft.css';
import '../../css/x/xhj_v8b4g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="chz62cc3y"/><path class="mxksfsbhx"/><path class="lg4yc5rft"/><path class="xhj_v8b4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:google-hangouts-alt"} {...others} />);
}

export default Component;
