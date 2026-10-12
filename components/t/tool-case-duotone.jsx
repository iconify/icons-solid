import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aoz-vgokd.css';
import '../../css/s/s3asngb_b.css';
import '../../css/n/n171dubne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="aoz-vgokd"/><path class="s3asngb_b"/><path class="n171dubne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:tool-case-duotone"} {...others} />);
}

export default Component;
