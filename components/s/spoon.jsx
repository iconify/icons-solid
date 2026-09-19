import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sufeeoq6j.css';
import '../../css/w/wyqctrbau.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="sufeeoq6j"/><path class="wyqctrbau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:spoon"} {...others} />);
}

export default Component;
