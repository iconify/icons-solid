import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fi5-9xmbr.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="fi5-9xmbr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:map-location-solid"} {...others} />);
}

export default Component;
