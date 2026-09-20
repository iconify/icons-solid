import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p-7zqub0t.css';
import '../../css/b/bjz3mberi.css';
import '../../css/i/i0h0r7bsw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="p-7zqub0t"/><path class="bjz3mberi"/><path clip-rule="evenodd" class="i0h0r7bsw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:instagram-flat"} {...others} />);
}

export default Component;
