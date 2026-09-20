import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ujncc3bkv.css';
import '../../css/d/dbt4bdbnj.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ft5dv1b6b"><path class="ujncc3bkv"/><path class="dbt4bdbnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:macaulay2"} {...others} />);
}

export default Component;
