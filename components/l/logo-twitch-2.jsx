import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p8rru2b7i.css';
import '../../css/d/dwn288bus.css';
import '../../css/g/gddrajlcm.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="p8rru2b7i"/><path class="dwn288bus"/><path class="gddrajlcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:logo-twitch-2"} {...others} />);
}

export default Component;
