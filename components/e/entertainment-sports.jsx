import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j16ryqnyy.css';
import '../../css/r/rw_gh_boq.css';
import '../../css/l/lrq9z-bjp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="j16ryqnyy"/><path class="rw_gh_boq"/><path class="lrq9z-bjp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:entertainment-sports"} {...others} />);
}

export default Component;
