import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gx8y2ds-k.css';
import '../../css/m/mwfiol2dj.css';
import '../../css/r/rwc7d5bjq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gx8y2ds-k"><path class="mwfiol2dj"/><path class="rwc7d5bjq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:align-left"} {...others} />);
}

export default Component;
