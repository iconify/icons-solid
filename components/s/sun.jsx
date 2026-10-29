import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ga-e5ubqd.css';
import '../../css/s/spa3_3bbv.css';
import '../../css/e/e1ctgdcwl.css';
import '../../css/f/fi6cshbvq.css';
import '../../css/x/xdnreccak.css';
import '../../css/z/znnf_db0n.css';
import '../../css/y/yx8_r9guv.css';
import '../../css/k/kljykra7u.css';
import '../../css/z/zw24d4b8k.css';
import '../../css/b/bn3rjcbkq.css';
import '../../css/g/gz8q9pb-x.css';
import '../../css/w/w45xm-6mj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ga-e5ubqd wm-shadow"/><path class="spa3_3bbv wm-a"/><path class="e1ctgdcwl wm-a"/><path class="fi6cshbvq wm-a"/><path class="wm-a xdnreccak"/><path class="wm-k znnf_db0n"/><path class="wm-k yx8_r9guv"/><path class="kljykra7u wm-k"/><path class="wm-k zw24d4b8k"/><path class="bn3rjcbkq wm-shine"/><path class="gz8q9pb-x wm-k"/><path class="w45xm-6mj wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:sun"} {...others} />);
}

export default Component;
