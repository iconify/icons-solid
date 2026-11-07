import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/s8ozf6mmj.css';
import '../../css/r/rs9vlc3gn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="s8ozf6mmj"/><path class="rs9vlc3gn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:heart-broken-line-duotone"} {...others} />);
}

export default Component;
