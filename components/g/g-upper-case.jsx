import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lgydwwb3g.css';

const viewBox = {"width":795,"height":776};
const content = `<path class="lgydwwb3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:g-upper-case"} {...others} />);
}

export default Component;
