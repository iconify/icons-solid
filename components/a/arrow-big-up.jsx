import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i21jbbwpz.css';
import '../../css/p/pupxk162x.css';
import '../../css/b/b2nw84olu.css';
import '../../css/q/q042wibbw.css';
import '../../css/s/s3d-94lzj.css';
import '../../css/b/bzi-mxb7c.css';
import '../../css/c/cxnz_zbbf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i21jbbwpz wm-shadow"/><path class="pupxk162x wm-k"/><path class="b2nw84olu wm-k"/><path class="q042wibbw wm-k"/><path class="s3d-94lzj wm-k"/><path class="bzi-mxb7c wm-k"/><path class="cxnz_zbbf wm-shine"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:arrow-big-up"} {...others} />);
}

export default Component;
