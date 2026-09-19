import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tj18s5bgc.css';
import '../../css/j/j-qqu6bhe.css';
import '../../css/s/sf6q5ib2a.css';
import '../../css/h/hjxxar72n.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="tj18s5bgc"/><path class="j-qqu6bhe"/><path class="sf6q5ib2a"/><path class="hjxxar72n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:oil-drum"} {...others} />);
}

export default Component;
