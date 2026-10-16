import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6ncrt0qq.css';
import '../../css/d/d6ggj99yx.css';
import '../../css/j/jofw17bvc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="k6ncrt0qq"/><path class="d6ggj99yx"/><path class="jofw17bvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:current-source-20"} {...others} />);
}

export default Component;
