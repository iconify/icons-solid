import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wz0izxbct.css';
import '../../css/s/sag4nxb0x.css';
import '../../css/t/trfd_g7-m.css';
import '../../css/w/wffp37qco.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="wz0izxbct"/><path class="sag4nxb0x"/><path class="trfd_g7-m"/><path class="wffp37qco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:wrapped-gift"} {...others} />);
}

export default Component;
