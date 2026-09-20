import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/taetpcc9j.css';
import '../../css/x/x1myhrb6i.css';
import '../../css/j/j7uzmn7zu.css';
import '../../css/u/u2t3prbzn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="taetpcc9j"/><path class="x1myhrb6i"/><path class="j7uzmn7zu"/><path class="u2t3prbzn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:athletics-javelin-throwing"} {...others} />);
}

export default Component;
