import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/u-s2apb4c.css';
import '../../css/j/jzczbcygq.css';
import '../../css/r/rmfk9oeoh.css';
import '../../css/r/rql3qpe4z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="u-s2apb4c wm-shadow"/><path class="jzczbcygq wm-shadow"/><path class="rmfk9oeoh"/><path class="rql3qpe4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:cctv"} {...others} />);
}

export default Component;
