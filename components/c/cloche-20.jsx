import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qan-v46oz.css';
import '../../css/r/r-dqwzb9h.css';
import '../../css/s/s2i58ab4v.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qan-v46oz"/><path class="r-dqwzb9h"/><path class="s2i58ab4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cloche-20"} {...others} />);
}

export default Component;
