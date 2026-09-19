import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m5xe9ybcw.css';
import '../../css/c/cuogirb-s.css';
import '../../css/a/aln2yuqeg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="shield-alert-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="m5xe9ybcw"/><path clip-rule="evenodd" class="cuogirb-s"/><path class="aln2yuqeg"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:shield-alert-outline"} {...others} />);
}

export default Component;
