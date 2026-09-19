import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hxl5el8-f.css';
import '../../css/t/thgdu0bta.css';
import '../../css/d/d62ydupxb.css';
import '../../css/g/gop114bue.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><circle class="hxl5el8-f"/><circle class="thgdu0bta"/><circle class="d62ydupxb"/><path class="gop114bue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:git-merge"} {...others} />);
}

export default Component;
