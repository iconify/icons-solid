import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqc0waccm.css';
import '../../css/q/qzwenoa2o.css';
import '../../css/y/ys6ptrd3a.css';
import '../../css/z/z2s2x3bdu.css';
import '../../css/g/g0016m7ke.css';
import '../../css/y/y-47q73en.css';
import '../../css/c/cdthvjbzg.css';
import '../../css/r/r0reh58ta.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cqc0waccm"/><path clip-rule="evenodd" class="qzwenoa2o"/><path clip-rule="evenodd" class="ys6ptrd3a"/><path class="z2s2x3bdu"/><path class="g0016m7ke"/><path class="y-47q73en"/><path class="cdthvjbzg"/><path class="r0reh58ta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:qr-code-bold"} {...others} />);
}

export default Component;
