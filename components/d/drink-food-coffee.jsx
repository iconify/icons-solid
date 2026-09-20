import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j2weq6b3x.css';
import '../../css/x/xxy5vlbmj.css';
import '../../css/r/r38z6l46e.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j2weq6b3x"/><path clip-rule="evenodd" class="xxy5vlbmj"/><path class="r38z6l46e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:drink-food-coffee"} {...others} />);
}

export default Component;
