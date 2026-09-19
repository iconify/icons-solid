import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d1yh2db6t.css';
import '../../css/y/yi--5skpi.css';
import '../../css/e/ehj9i9bna.css';
import '../../css/u/u505mhbii.css';
import '../../css/q/qj2_kjb-u.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="d1yh2db6t"/><path class="yi--5skpi"/><path class="ehj9i9bna"/><rect class="u505mhbii"/><path class="qj2_kjb-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:jar"} {...others} />);
}

export default Component;
