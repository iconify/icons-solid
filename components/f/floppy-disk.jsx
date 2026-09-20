import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/ww0uzbbvf.css';
import '../../css/l/lbkcqfo9k.css';
import '../../css/a/a144y4bxc.css';
import '../../css/a/acdpkpb0m.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ww0uzbbvf"/><path clip-rule="evenodd" class="lbkcqfo9k"/><path class="a144y4bxc"/><path class="acdpkpb0m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:floppy-disk"} {...others} />);
}

export default Component;
