import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zlkpuxbnl.css';
import '../../css/b/b1djw6bjn.css';
import '../../css/n/na0nesucf.css';
import '../../css/o/o3oli_b6e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="zlkpuxbnl"/><path class="b1djw6bjn wm-a"/><path class="na0nesucf wm-k"/><path class="o3oli_b6e wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:alert-triangle-sketch"} {...others} />);
}

export default Component;
