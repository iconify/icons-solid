import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/t/tutyhtbtf.css';
import '../../css/l/lvprdxdgh.css';
import '../../css/e/e-1ifub3i.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="hntgybcog"><circle class="tutyhtbtf"/><circle class="lvprdxdgh"/><path class="e-1ifub3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"charm:people"} {...others} />);
}

export default Component;
