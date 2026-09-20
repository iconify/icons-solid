import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pnr7fptxp.css';
import '../../css/w/wl2c1p1go.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pnr7fptxp"/><path class="wl2c1p1go"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:feed"} {...others} />);
}

export default Component;
