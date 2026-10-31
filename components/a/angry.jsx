import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/s/ssxi8fbrc.css';
import '../../css/v/vjzc1ab5s.css';
import '../../css/m/mg6qmzb2u.css';
import '../../css/y/y6ym9qc4c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ssxi8fbrc wm-shadow"/><path class="vjzc1ab5s wm-shadow"/><path class="mg6qmzb2u"/><path class="y6ym9qc4c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:angry"} {...others} />);
}

export default Component;
