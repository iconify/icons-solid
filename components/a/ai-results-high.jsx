import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rw3u8dcyu.css';
import '../../css/s/s3bjnib6t.css';
import '../../css/c/cytj3kbqo.css';
import '../../css/a/a574bcccz.css';
import '../../css/q/qnmiannsd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="rw3u8dcyu"/><path class="s3bjnib6t"/><path class="cytj3kbqo"/><path class="a574bcccz"/><path class="qnmiannsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ai-results-high"} {...others} />);
}

export default Component;
