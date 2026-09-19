import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j3-dqm56q.css';
import '../../css/v/vyytf6x5t.css';
import '../../css/s/sugscdbww.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="j3-dqm56q"/><path class="vyytf6x5t"/><path class="sugscdbww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:palms-up-together-medium"} {...others} />);
}

export default Component;
