import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w8t_l-zpt.css';
import '../../css/l/ltc4adbej.css';
import '../../css/f/fr7saipmm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w8t_l-zpt"/><path class="ltc4adbej"/><path class="fr7saipmm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:bookmark-double"} {...others} />);
}

export default Component;
