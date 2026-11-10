import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z0vv-ob-t.css';
import '../../css/j/jz7g82l-l.css';
import '../../css/t/tkr0xi29k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z0vv-ob-t"/><path class="jz7g82l-l"/><path class="tkr0xi29k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:relocate-left"} {...others} />);
}

export default Component;
