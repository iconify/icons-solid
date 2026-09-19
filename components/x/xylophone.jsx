import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzt7ai2sn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dzt7ai2sn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:xylophone"} {...others} />);
}

export default Component;
