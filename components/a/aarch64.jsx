import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7o35hbpj.css';
import '../../css/d/dmbeawb_o.css';
import '../../css/r/rg7-mwhum.css';
import '../../css/a/ar7iswbpi.css';
import '../../css/l/lfqw0vdmm.css';
import '../../css/g/gjk35jb3m.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="n7o35hbpj"/><path class="dmbeawb_o"/><g class="rg7-mwhum"><path class="ar7iswbpi"/><path class="lfqw0vdmm"/></g><path class="gjk35jb3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:aarch64"} {...others} />);
}

export default Component;
