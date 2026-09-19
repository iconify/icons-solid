import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sny75bc3q.css';
import '../../css/h/h0-przbga.css';
import '../../css/d/dwuyinbfw.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="sny75bc3q"/><path class="h0-przbga"/><path class="dwuyinbfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:pyramid"} {...others} />);
}

export default Component;
