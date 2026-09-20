import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fk3-ielxk.css';
import '../../css/w/wuh6fv9ys.css';
import '../../css/y/yxtspda5x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="fk3-ielxk"/><path class="wuh6fv9ys"/><path class="yxtspda5x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:loudspeaker"} {...others} />);
}

export default Component;
