import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tl3l4tb-u.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="tl3l4tb-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:story-maps"} {...others} />);
}

export default Component;
