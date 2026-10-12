import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uqc389uyr.css';
import '../../css/j/jb8zs8rhf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uqc389uyr"/><path class="jb8zs8rhf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:triangle"} {...others} />);
}

export default Component;
