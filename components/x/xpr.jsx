import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xdurq9vdm.css';
import '../../css/s/swbiljbjf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="xdurq9vdm"/><path class="swbiljbjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:xpr"} {...others} />);
}

export default Component;
