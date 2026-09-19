import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/i/iuyi4l1sh.css';
import '../../css/t/tzwfbjhup.css';
import '../../css/u/uvj71_bha.css';
import '../../css/m/myoistbvt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGf853Ddqu"><g class="wwvp95byt"><path clip-rule="evenodd" class="iuyi4l1sh"/><path class="tzwfbjhup"/><path class="uvj71_bha"/><path class="myoistbvt"/></g></mask></defs><path mask="url(#SVGf853Ddqu)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:cuvette"} {...others} />);
}

export default Component;
