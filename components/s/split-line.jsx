import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cj610ot7w.css';
import '../../css/u/up6p_bbnh.css';
import '../../css/e/et771ymsh.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="cj610ot7w"/><path class="up6p_bbnh"/><path class="et771ymsh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:split-line"} {...others} />);
}

export default Component;
