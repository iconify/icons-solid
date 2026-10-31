import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/y/y2xm6ab1t.css';
import '../../css/h/hs3zrlr-k.css';
import '../../css/k/k5-fswzkp.css';
import '../../css/f/foo559qnk.css';
import '../../css/c/csac9jvtl.css';
import '../../css/v/vxuqhab0r.css';
import '../../css/w/w1tuhdccv.css';
import '../../css/t/tsfo3zbae.css';
import '../../css/i/i21lcr6xo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="y2xm6ab1t"/><path class="hs3zrlr-k"/><path class="k5-fswzkp"/><path class="foo559qnk wm-shine"/><path class="csac9jvtl wm-k"/><path class="vxuqhab0r wm-a"/><path class="w1tuhdccv"/><path class="tsfo3zbae"/><path class="i21lcr6xo wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:monitor"} {...others} />);
}

export default Component;
