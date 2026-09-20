import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hiioq7nmy.css';
import '../../css/i/ibt374k7g.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="hiioq7nmy"/><path class="ibt374k7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:location-heart-pin"} {...others} />);
}

export default Component;
