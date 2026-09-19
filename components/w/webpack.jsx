import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/b/bqgkxtcew.css';
import '../../css/o/oygve5bcg.css';
import '../../css/r/r9cpugb5q.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="t_2lkqbxb"><path class="bqgkxtcew"/><path class="oygve5bcg"/><path class="r9cpugb5q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:webpack"} {...others} />);
}

export default Component;
