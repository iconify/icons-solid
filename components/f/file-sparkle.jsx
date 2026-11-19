import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dmcnghoau.css';
import '../../css/b/bge5drf7z.css';
import '../../css/y/y4_0nvbdl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dmcnghoau"/><path class="bge5drf7z"/><path class="y4_0nvbdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-sparkle"} {...others} />);
}

export default Component;
