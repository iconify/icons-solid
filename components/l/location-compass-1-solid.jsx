import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mcgmd2b0i.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="mcgmd2b0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:location-compass-1-solid"} {...others} />);
}

export default Component;
