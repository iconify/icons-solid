import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d8c3mobyr.css';
import '../../css/x/xlzl9rbag.css';
import '../../css/i/ie4e8tuss.css';
import '../../css/c/cgy2nq5hz.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="d8c3mobyr"/><path class="xlzl9rbag"/><path class="ie4e8tuss"/><path class="cgy2nq5hz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:trash-20-bold"} {...others} />);
}

export default Component;
