import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lgf7rpbof.css';
import '../../css/g/gbyjw7b_q.css';
import '../../css/g/gx73n_bub.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="lgf7rpbof wm-shadow"/><path class="gbyjw7b_q wm-shadow"/><path class="gx73n_bub"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:person-standing"} {...others} />);
}

export default Component;
