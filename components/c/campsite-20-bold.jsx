import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqvhibb-t.css';
import '../../css/i/ia7-zwuym.css';
import '../../css/z/zghr7o10a.css';
import '../../css/r/r9biv4bfy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cqvhibb-t"/><path class="ia7-zwuym"/><path class="zghr7o10a"/><path class="r9biv4bfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:campsite-20-bold"} {...others} />);
}

export default Component;
