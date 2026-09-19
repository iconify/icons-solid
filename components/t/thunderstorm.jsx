import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r47ofacoh.css';
import '../../css/k/kya3ihb6q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r47ofacoh"/><path class="kya3ihb6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:thunderstorm"} {...others} />);
}

export default Component;
