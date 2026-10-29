import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgftq2y-s.css';
import '../../css/p/ptgdngbsh.css';
import '../../css/u/uqnwwx2pp.css';
import '../../css/r/r-k1aib9e.css';
import '../../css/l/low6djbvk.css';
import '../../css/s/s78ltzgar.css';
import '../../css/r/r5b76ab7z.css';
import '../../css/z/zsaxl9qdb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-shadow zgftq2y-s"/><path class="ptgdngbsh wm-k"/><path class="uqnwwx2pp wm-k"/><path class="r-k1aib9e wm-k"/><path class="low6djbvk wm-k"/><path class="s78ltzgar wm-k"/><path class="r5b76ab7z wm-shine"/><path class="wm-a zsaxl9qdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:ruler"} {...others} />);
}

export default Component;
