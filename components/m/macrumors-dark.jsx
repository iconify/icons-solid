import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vtn7x78-f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vtn7x78-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:macrumors-dark"} {...others} />);
}

export default Component;
