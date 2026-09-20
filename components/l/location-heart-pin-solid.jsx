import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f8r6-nb4a.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="f8r6-nb4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:location-heart-pin-solid"} {...others} />);
}

export default Component;
