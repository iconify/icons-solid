import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g9v87ubhi.css';
import '../../css/f/fm-3u1bok.css';
import '../../css/z/zagbw963f.css';
import '../../css/f/fp_fcybsj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g9v87ubhi"/><path class="fm-3u1bok"/><path class="zagbw963f"/><path class="fp_fcybsj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:files"} {...others} />);
}

export default Component;
