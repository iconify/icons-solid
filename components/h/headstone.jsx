import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-av3_bit.css';
import '../../css/r/r4_7jcbgs.css';
import '../../css/p/pc7f2vb6i.css';
import '../../css/o/oflaz1bix.css';
import '../../css/j/jcyo4yvaz.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="f-av3_bit"/><path class="r4_7jcbgs"/><path class="pc7f2vb6i"/><path class="oflaz1bix"/><path class="jcyo4yvaz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:headstone"} {...others} />);
}

export default Component;
