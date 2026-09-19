import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulra56alq.css';
import '../../css/s/soqzb4g1r.css';
import '../../css/b/bmznkrbcu.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ulra56alq"><path class="soqzb4g1r"/><path class="bmznkrbcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:css"} {...others} />);
}

export default Component;
