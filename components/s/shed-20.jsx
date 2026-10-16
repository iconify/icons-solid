import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aajqmxblx.css';
import '../../css/l/lt_twkb4l.css';
import '../../css/p/p78aomkxz.css';
import '../../css/s/s0y6ktbpg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="aajqmxblx"/><path class="lt_twkb4l"/><path class="p78aomkxz"/><path class="s0y6ktbpg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shed-20"} {...others} />);
}

export default Component;
