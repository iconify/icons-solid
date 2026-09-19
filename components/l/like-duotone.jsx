import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qh68rnblk.css';
import '../../css/g/g45mtmdnj.css';
import '../../css/t/tcccckbck.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qh68rnblk"/><path class="g45mtmdnj"/><path class="tcccckbck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:like-duotone"} {...others} />);
}

export default Component;
