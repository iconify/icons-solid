import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hlz_osbhr.css';
import '../../css/r/rwwu0mw7d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hlz_osbhr"/><path class="rwwu0mw7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:location-24"} {...others} />);
}

export default Component;
