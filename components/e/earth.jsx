import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uo3oojd-t.css';
import '../../css/h/hf0e6cbjv.css';
import '../../css/n/n0umv9b6l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uo3oojd-t"/><path class="hf0e6cbjv"/><path class="n0umv9b6l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:earth"} {...others} />);
}

export default Component;
