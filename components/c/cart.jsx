import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/en701kbcf.css';
import '../../css/b/bsy36b7su.css';
import '../../css/l/ln68z2bzx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="en701kbcf"/><circle class="bsy36b7su"/><path class="ln68z2bzx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"humbleicons:cart"} {...others} />);
}

export default Component;
