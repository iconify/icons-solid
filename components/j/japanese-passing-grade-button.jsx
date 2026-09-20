import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obi7p7-mc.css';
import '../../css/u/u38_ebckg.css';
import '../../css/m/my31-mbvu.css';
import '../../css/a/a6-44yfbj.css';

const viewBox = {"width":72,"height":72};
const content = `<path clip-rule="evenodd" class="obi7p7-mc"/><path class="u38_ebckg"/><path class="my31-mbvu"/><path class="a6-44yfbj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:japanese-passing-grade-button"} {...others} />);
}

export default Component;
