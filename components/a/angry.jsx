import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-xk_ruej.css';
import '../../css/j/jv463gbdf.css';
import '../../css/b/b49q-0sop.css';
import '../../css/s/s3ioz5cym.css';
import '../../css/n/nndxyclzt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="k-xk_ruej"/><path class="jv463gbdf"/><path class="b49q-0sop"/><path class="s3ioz5cym"/><path class="nndxyclzt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:angry"} {...others} />);
}

export default Component;
