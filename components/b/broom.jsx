import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u5-aelbcw.css';
import '../../css/n/n4b98qw6q.css';
import '../../css/h/hwj8q4bvr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u5-aelbcw"/><path class="n4b98qw6q"/><path class="hwj8q4bvr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:broom"} {...others} />);
}

export default Component;
