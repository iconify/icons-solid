import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hr08b61pk.css';
import '../../css/t/tjfi85b2h.css';
import '../../css/j/jyx3upbae.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="hr08b61pk"/><path class="tjfi85b2h"/><path class="jyx3upbae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lollypop-music-player"} {...others} />);
}

export default Component;
