import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k212sxbyf.css';
import '../../css/u/uy6iosx5w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="k212sxbyf"/><path class="uy6iosx5w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:dam"} {...others} />);
}

export default Component;
