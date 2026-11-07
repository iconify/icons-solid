import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b5nefr4oy.css';
import '../../css/s/s4_kou6zz.css';
import '../../css/u/uyy-03b_b.css';
import '../../css/f/fxfgl_6kl.css';
import '../../css/n/nnrvnlj2z.css';
import '../../css/v/vep2w7bwl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b5nefr4oy"/><path class="s4_kou6zz"/><path class="uyy-03b_b"/><path class="fxfgl_6kl"/><path class="nnrvnlj2z"/><path class="vep2w7bwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:grip-horizontal-outline"} {...others} />);
}

export default Component;
