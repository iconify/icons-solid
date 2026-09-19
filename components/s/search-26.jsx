import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to0c2ub7t.css';
import '../../css/j/jqm63dyww.css';
import '../../css/t/t46axxb4d.css';

const viewBox = {"width":26,"height":26};
const content = `<g class="to0c2ub7t"><circle class="jqm63dyww"/><path class="t46axxb4d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:search-26"} {...others} />);
}

export default Component;
