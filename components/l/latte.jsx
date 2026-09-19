import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o58hkebvg.css';
import '../../css/o/oscabebss.css';
import '../../css/i/ijtuyxbwx.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="o58hkebvg"><path class="oscabebss"/><path class="ijtuyxbwx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:latte"} {...others} />);
}

export default Component;
