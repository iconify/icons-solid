import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/artiuobsj.css';
import '../../css/u/u815dwbzl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="artiuobsj"/><path class="u815dwbzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:a-frame-20"} {...others} />);
}

export default Component;
