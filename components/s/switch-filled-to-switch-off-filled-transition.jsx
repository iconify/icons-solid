import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/snl_hb.css';
import '../../css/e/e3x2ay.css';
import '../../css/b/botfzx.css';
import '../../css/c/cx-from-17px.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVGjcmRbbQu"><path class="snl_hb"/><circle class="e3x2ay"/></mask></defs><path mask="url(#SVGjcmRbbQu)" class="botfzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:switch-filled-to-switch-off-filled-transition"} {...others} />);
}

export default Component;
