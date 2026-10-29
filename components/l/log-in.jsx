import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fpyz7kbdi.css';
import '../../css/k/kjzt_gtow.css';
import '../../css/s/spj2foupj.css';
import '../../css/b/brgqfxl-s.css';
import '../../css/z/zhpf88b5n.css';
import '../../css/d/dlrnh0hzo.css';
import '../../css/y/y0x194bvo.css';
import '../../css/t/tavckwbyo.css';
import '../../css/c/cb52whyfu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fpyz7kbdi wm-shadow"/><path class="kjzt_gtow wm-k"/><path class="spj2foupj wm-k"/><path class="brgqfxl-s wm-k"/><path class="wm-k zhpf88b5n"/><path class="dlrnh0hzo wm-k"/><path class="wm-shine y0x194bvo"/><path class="tavckwbyo wm-a"/><path class="cb52whyfu wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:log-in"} {...others} />);
}

export default Component;
