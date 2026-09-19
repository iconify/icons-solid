import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdrdouc4f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sdrdouc4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:dumpling-bao"} {...others} />);
}

export default Component;
