import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6jro9b_d.css';
import '../../css/x/x6xdhtlxk.css';
import '../../css/v/vtmirmbnd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n6jro9b_d"/><path class="x6xdhtlxk"/><path class="vtmirmbnd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:sparkles"} {...others} />);
}

export default Component;
