import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bmfqb3vgi.css';
import '../../css/m/mnjoo2b-e.css';
import '../../css/d/d72uamb_u.css';
import '../../css/j/jthpq7bcp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="bmfqb3vgi"/><path class="mnjoo2b-e"/><path class="d72uamb_u"/><path class="jthpq7bcp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:field-hockey"} {...others} />);
}

export default Component;
