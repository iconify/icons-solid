import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dht-pbcvy.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dht-pbcvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:steam-train-on-railway-track"} {...others} />);
}

export default Component;
