import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eyq2racqf.css';
import '../../css/d/dvqecdcrk.css';
import '../../css/o/o9ld_ebbf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="eyq2racqf"/><rect transform="matrix(-1 0 0 1 9.84 2.76)" class="dvqecdcrk"/><path class="o9ld_ebbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:template"} {...others} />);
}

export default Component;
