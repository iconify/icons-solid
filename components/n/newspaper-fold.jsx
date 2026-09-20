import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/l/lyfpph83j.css';
import '../../css/i/ibyph9b4f.css';
import '../../css/s/s2oty211w.css';
import '../../css/o/oeds6acur.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="lyfpph83j"/><path class="ibyph9b4f"/><path class="s2oty211w"/><path class="oeds6acur"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:newspaper-fold"} {...others} />);
}

export default Component;
