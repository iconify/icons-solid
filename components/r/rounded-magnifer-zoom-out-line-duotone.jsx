import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/p/pt9xvrdoi.css';
import '../../css/z/znoc0kvzy.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<defs><mask id="SVG0ggNochV"><g class="k2u665ban"><circle class="pt9xvrdoi"/><path class="znoc0kvzy"/></g></mask></defs><path mask="url(#SVG0ggNochV)" class="w49j0rbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:rounded-magnifer-zoom-out-line-duotone"} {...others} />);
}

export default Component;
