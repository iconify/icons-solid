import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/snl_hb.css';
import '../../css/x/x93a4q.css';
import '../../css/b/botfzx.css';
import '../../css/c/cx-from-7px.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG262Nbd6S"><path class="snl_hb"/><circle class="x93a4q"/></mask></defs><path mask="url(#SVG262Nbd6S)" class="botfzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:switch-off-filled-to-switch-filled-transition"} {...others} />);
}

export default Component;
