import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dzhy174bn.css';
import '../../css/t/t70ittbnx.css';
import '../../css/c/c6hof6utt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="dzhy174bn"/><path class="t70ittbnx"/><path class="c6hof6utt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ice-melt-20"} {...others} />);
}

export default Component;
