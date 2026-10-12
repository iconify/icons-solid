import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c7tyh4b8c.css';
import '../../css/u/u4bc0tbtu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c7tyh4b8c"/><rect transform="matrix(0 -1 -1 0 20.43 18.7)" class="u4bc0tbtu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:drop-shadow"} {...others} />);
}

export default Component;
