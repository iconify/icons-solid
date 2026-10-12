import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aaz641b-q.css';
import '../../css/i/i0wlbrb9z.css';
import '../../css/h/ho6q42b7r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="aaz641b-q"/><rect class="i0wlbrb9z"/><path class="ho6q42b7r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:regex"} {...others} />);
}

export default Component;
