import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e6dewjbzn.css';
import '../../css/s/sjwoctbio.css';
import '../../css/a/acdx5tx5c.css';
import '../../css/q/qi98lmn2m.css';
import '../../css/e/elvnid_xw.css';
import '../../css/b/b_cpp7bam.css';
import '../../css/i/irt6kac4h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="e6dewjbzn wm-k"/><path class="sjwoctbio wm-k"/><path class="acdx5tx5c wm-k"/><path class="qi98lmn2m wm-k"/><path class="elvnid_xw wm-k"/><path class="b_cpp7bam wm-k"/><path class="irt6kac4h wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:chevrons-right"} {...others} />);
}

export default Component;
