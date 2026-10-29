import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-2rqxbem.css';
import '../../css/h/h3nfqcu4o.css';
import '../../css/e/ex_32bc2j.css';
import '../../css/b/bmjdpb5os.css';
import '../../css/f/fqt86cc-t.css';
import '../../css/z/zqtezoi-y.css';
import '../../css/r/rocgp6bcf.css';
import '../../css/b/bqznwmb8p.css';
import '../../css/e/e0fcqqbyo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d-2rqxbem wm-shadow"/><path class="h3nfqcu4o wm-k"/><path class="ex_32bc2j wm-k"/><path class="bmjdpb5os wm-k"/><path class="fqt86cc-t wm-k"/><path class="wm-k zqtezoi-y"/><path class="rocgp6bcf wm-shine"/><path class="bqznwmb8p wm-a"/><path class="e0fcqqbyo wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:folder-tree"} {...others} />);
}

export default Component;
