import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cugtugbfx.css';
import '../../css/r/r-mawcbqk.css';
import '../../css/e/en4c201jt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cugtugbfx"/><path class="r-mawcbqk"/><path class="en4c201jt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:govi"} {...others} />);
}

export default Component;
