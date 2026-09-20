import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a_j3ddv5a.css';
import '../../css/p/pe8yj-8iy.css';
import '../../css/z/z10r9ukws.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="a_j3ddv5a"/><path class="pe8yj-8iy"/><path clip-rule="evenodd" class="z10r9ukws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:inbox-open-flat"} {...others} />);
}

export default Component;
