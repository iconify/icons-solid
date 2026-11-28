import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bdjbc6bam.css';
import '../../css/a/aamzuxgbx.css';
import '../../css/i/if0ufkp_i.css';
import '../../css/z/zq7w4tasu.css';
import '../../css/k/kt2-hnb4k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="bdjbc6bam"/><path class="aamzuxgbx"/><path class="if0ufkp_i"/><path class="zq7w4tasu"/><path class="kt2-hnb4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:paw"} {...others} />);
}

export default Component;
