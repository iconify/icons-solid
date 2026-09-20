import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vmd9t7b_r.css';
import '../../css/r/r-ox38ulx.css';
import '../../css/w/wki8h1byv.css';
import '../../css/n/nx7pbsbkk.css';
import '../../css/y/yzznlveym.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="vmd9t7b_r"/><circle class="r-ox38ulx"/><path class="wki8h1byv"/><path class="nx7pbsbkk"/><circle class="yzznlveym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:tennis"} {...others} />);
}

export default Component;
