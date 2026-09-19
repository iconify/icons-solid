import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yoqkbjeqd.css';
import '../../css/c/cpe-z9b0s.css';
import '../../css/d/dj01mremq.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="yoqkbjeqd"/><path class="cpe-z9b0s"/><path class="dj01mremq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:plotly"} {...others} />);
}

export default Component;
