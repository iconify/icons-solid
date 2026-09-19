import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xcvd6zbwm.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="xcvd6zbwm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:fastforward"} {...others} />);
}

export default Component;
