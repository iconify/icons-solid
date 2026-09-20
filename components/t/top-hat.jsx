import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zbkalab5n.css';
import '../../css/j/jut-sxzup.css';
import '../../css/y/yf6vu0_hw.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="zbkalab5n"/><path class="jut-sxzup"/><path class="yf6vu0_hw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:top-hat"} {...others} />);
}

export default Component;
