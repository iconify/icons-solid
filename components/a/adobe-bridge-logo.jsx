import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/z/z0iyx-zmg.css';
import '../../css/s/s-v3g2bgb.css';
import '../../css/z/zoe--_n2a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="z0iyx-zmg"/><path class="s-v3g2bgb"/><path class="zoe--_n2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:adobe-bridge-logo"} {...others} />);
}

export default Component;
