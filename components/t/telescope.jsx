import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bxmd5va3c.css';
import '../../css/c/c7woc6bam.css';
import '../../css/q/qwe7xyill.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="bxmd5va3c"/><path class="c7woc6bam"/><path class="qwe7xyill"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:telescope"} {...others} />);
}

export default Component;
