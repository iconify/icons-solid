import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/biuihtbcw.css';
import '../../css/n/nou84c3ti.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="biuihtbcw"/><path class="nou84c3ti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:funnel-match-rtl"} {...others} />);
}

export default Component;
