import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yo8u7cwpx.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="yo8u7cwpx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:location-target-1-remix"} {...others} />);
}

export default Component;
