import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/at2dx1rbn.css';
import '../../css/c/c9__knb3x.css';
import '../../css/e/ei_ncnbvb.css';
import '../../css/x/xpihgph7i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="at2dx1rbn"><path class="c9__knb3x"/><path class="ei_ncnbvb"/><path class="xpihgph7i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:synchronize-diamond"} {...others} />);
}

export default Component;
