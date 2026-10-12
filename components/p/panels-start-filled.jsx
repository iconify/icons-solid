import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jcsyqv5xp.css';
import '../../css/f/fph8jzbve.css';
import '../../css/h/hs4bpqzjk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="jcsyqv5xp"/><rect class="fph8jzbve"/><path class="hs4bpqzjk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:panels-start-filled"} {...others} />);
}

export default Component;
