import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/ms8rsmb7j.css';
import '../../css/j/jwa8e9rov.css';

const viewBox = {"width":17,"height":16};
const content = `<g class="n1lsf0bnc"><path class="ms8rsmb7j"/><path class="jwa8e9rov"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si-glyph:typewriter"} {...others} />);
}

export default Component;
