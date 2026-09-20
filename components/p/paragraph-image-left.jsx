import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/stkvmwbol.css';
import '../../css/e/ehcimtb9e.css';
import '../../css/n/ng7sm478m.css';
import '../../css/o/opipx0bty.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="stkvmwbol"/><path class="ehcimtb9e"/><path class="ng7sm478m"/><path class="opipx0bty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:paragraph-image-left"} {...others} />);
}

export default Component;
