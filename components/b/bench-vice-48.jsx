import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jxn26mb9t.css';
import '../../css/a/aekfktbaf.css';
import '../../css/r/r0qeryp2j.css';
import '../../css/f/fiqncj_tj.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="jxn26mb9t"/><path class="aekfktbaf"/><path class="r0qeryp2j"/><path class="fiqncj_tj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bench-vice-48"} {...others} />);
}

export default Component;
