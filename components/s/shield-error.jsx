import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hp0ef7eag.css';
import '../../css/b/bb_1k1bwk.css';
import '../../css/w/w6fka2b0y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hp0ef7eag"/><path clip-rule="evenodd" class="bb_1k1bwk"/><path class="w6fka2b0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:shield-error"} {...others} />);
}

export default Component;
