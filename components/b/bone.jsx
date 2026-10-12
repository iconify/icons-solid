import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pakhxgbjk.css';
import '../../css/o/o4dqfipva.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pakhxgbjk"/><path class="o4dqfipva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bone"} {...others} />);
}

export default Component;
