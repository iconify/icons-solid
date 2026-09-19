import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulra56alq.css';
import '../../css/g/gr7r812zo.css';
import '../../css/o/osh726bgc.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ulra56alq"><path class="gr7r812zo"/><path class="osh726bgc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:adobe-ae"} {...others} />);
}

export default Component;
