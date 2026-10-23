import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f2xtk0bdd.css';
import '../../css/c/cz2d2khri.css';
import '../../css/n/n_1mlcb-b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f2xtk0bdd"/><path class="cz2d2khri"/><path class="n_1mlcb-b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:first-aid-circle"} {...others} />);
}

export default Component;
