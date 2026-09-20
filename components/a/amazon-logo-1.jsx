import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fcpdq5b6a.css';
import '../../css/y/yc6czgbis.css';
import '../../css/t/t4phf4b9s.css';
import '../../css/d/d0bkx_30e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fcpdq5b6a"/><path clip-rule="evenodd" class="yc6czgbis"/><path class="t4phf4b9s"/><path class="d0bkx_30e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:amazon-logo-1"} {...others} />);
}

export default Component;
