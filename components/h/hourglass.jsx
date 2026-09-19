import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vv0q8b-8f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vv0q8b-8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:hourglass"} {...others} />);
}

export default Component;
